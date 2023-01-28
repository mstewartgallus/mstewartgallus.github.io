import moment from "moment";
import { promises as fs } from "fs";
import slugify from "slugify";
import grayMatter from "gray-matter";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = resolve('./type-defs.gql');
const mdxTemplate = resolve('../../src/templates/post.jsx');
const poemTemplate = resolve('../../src/templates/post.jsx');

const frontmatter = source => {
    return grayMatter(source, {
        language: 'yaml',
        engines: {
            js: () => {
                return {}
            },
            javascript: () => {
                return {}
            },
            json: () => {
                return {}
            },
        }
    });
};

const slugOf = ({ category, name }) => {
    // FIXME
    // YYYY-MM-DD-foo.bar
    const parts = name.slice(0, 11).split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    name = name.slice(11);

    const opts = { lower: true };
    const catSlug = slugify(category, opts);
    const nameSlug = slugify(name, opts);

    return `/${catSlug}/${year}/${month}/${day}/${nameSlug}/`;
};

const metadata = frontmatter => {
    let { description, name, category, date, title, subtitle, notice, tags, people, places } = frontmatter;

    if (!category) {
        throw new Error("no category");
    }
    if (!date) {
        throw new Error("no date");
    }
    if (!name) {
        throw new Error("no name");
    }

    people = people ?? [];
    notice = notice ?? [];
    tags = tags ?? [];
    places = places ?? [];

    const slug = slugOf({ category, date, name });

    return { description, slug, date, category, title, subtitle, notice, tags, places, people };
};

const parsePoem = source => {
    source = source.trim();
    const stanzas = source.split('\n\n');
    return stanzas.map(stanza => {
        stanza = stanza.trim();
        const lines = stanza.split('\n');
        return lines.map(line => {
            line = line.trim();
            const segments = line.split('‖');
            return segments.map(seg => seg.trim());
        });
    });
};

const postNodeOfPoemFile = async ({ node, loadNodeContent }) => {
    const category = node.sourceInstanceName;
    const name = node.name;

    const { content, data } = frontmatter(await loadNodeContent(node));

    const ast = parsePoem(content);

    const description = ast[0]
          .slice(0, 2)
          .map(x => x.join('\u2009\u2014\u2009'))
          .join('\n');

    return {
        metadata: metadata({ name, category, description, ...data }),
        content: {
            __typename: 'PoemContent',
            body: ast
        }};
};

const postNodeOfMdx = async ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    const contentFilePath = node.internal.contentFilePath;

    return {
        metadata: metadata({ name, category, ...node.frontmatter }),
        content: {
            __typename: 'MdxContent',
            contentFilePath
        }
    };
};

const next = async (source, args, context, info) => {
    const { id, metadata: { date } } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Post',
        query: {
            limit: 1,
            sort: { fields: ['date'], order: ['ASC'] },
            filter: {
                id: { ne: id },
                date: { gte: date }
            }
        }
    });
    const x = Array.from(entries);
    if (x.length > 0) {
        return x[0];
    }
    return null;
};

const previous = async (source, args, context, info) => {
    const { id, metadata: { date } } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Post',
        query: {
            limit: 1,
            sort: { fields: ['date'], order: ['DESC'] },
            filter: {
                id: { ne: id },
                date: { lte: date }
            }
        }
    });
    const x = Array.from(entries);
    if (x.length > 0) {
        return x[0];
    }
    return null;
};

const onCreateFileNode = async props => {
    const {
        node,
        actions,
        createContentDigest,
        createNodeId,
        getNode
    } = props;
    if (node.extension !== 'poem') {
        return;
    }

    const post = await postNodeOfPoemFile(props);
    const postNode = {
        ...post,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> POST`),
        internal: {
            type: 'Post',
            contentDigest: createContentDigest(post)
        }
    };
    await actions.createNode(postNode);
    await actions.createParentChildLink({ parent: node, child: postNode });
};

const onCreateMdxNode = async ({
    node,
    actions,
    createContentDigest,
    createNodeId,
    getNode
}) => {
    const post = await postNodeOfMdx({ node, getNode });
    const postNode = {
        ...post,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> POST`),
        internal: {
            type: 'Post',
            contentDigest: createContentDigest(post)
        }
    };
    await actions.createNode(postNode);
    await actions.createParentChildLink({ parent: node, child: postNode });
};

const usePostList = async ({graphql, reporter}) => {
    const result = await graphql(`
query Posts {
   allPost {
      nodes {
          id
          metadata {
            slug
          }
          content {
            __typename
            ... on MdxContent {
               contentFilePath
            }
          }
        }
      }
    }
`);
    if (result.errors) {
        reporter.panicOnBuild('Error loading posts', result.errors);
        return;
    }
    return result.data.allPost.nodes;
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    const types = await fs.readFile(typeDefs, { encoding: `utf-8` });
    await createTypes(types);
    await createTypes([schema.buildUnionType({
        name: 'Content',
        resolveType(value) {
            // FIXME ugly hack
            const typename = value.__typename;
            if (!typename) {
                throw new Error("no typename");
            }
            return typename;
        }
    })]);
};

export const onCreateNode = async props => {
    switch (props.node.internal.type) {
        case 'Mdx':
            return await onCreateMdxNode(props);
        case 'File':
            return await onCreateFileNode(props);
    }
};

export const createResolvers = async ({ createResolvers }) => {
    await createResolvers({
        Post: {
            next: { type: 'Post', resolve: next },
            previous: { type: 'Post', resolve: previous }
        }
    });
};

export const createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const posts = await usePostList({ graphql, reporter });
    if (!posts) {
        return;
    }
    for (const post of posts) {
        const { id, metadata: { slug }, content } = post;
        switch (content.__typename) {
            case 'PoemContent':
                {
                    await createPage({
                        path: slug,
                        component: `${poemTemplate}`,
                        context: { id }
                    });
                    break;
                }

            case 'MdxContent':
                {
                    const contentFilePath = content.contentFilePath;
                    await createPage({
                        path: slug,
                        component: `${mdxTemplate}?__contentFilePath=${contentFilePath}`,
                        context: { id }
                    });
                    break;
                }
        }
    }
};
