import { promises as fs } from "fs";
import slugify from "slugify";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = resolve('./type-defs.gql');

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
    let {
        description, name, category, date,
        title, subtitle,
        notice, tags, people, places,
        author
    } = frontmatter;

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

    return {
        description, slug, date, category,
        title, subtitle,
        notice, tags, places, people,
        author
    };
};

const postNodeOfPoem = async ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    const ast = node.content;

    const description = ast[0]
          .slice(0, 2)
          .map(x => x.join('\u2009\u2014\u2009'))
          .join('\n');

    const content = {
            __typename: 'PoemContent',
            body: ast
    };

    return {
        metadata: metadata({ name, category, description, ...node.frontmatter }),
        content
    };
};

const postNodeOfMdx = async ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    const contentFilePath = node.internal.contentFilePath;

    const content = {
            __typename: 'MdxContent',
            contentFilePath
    };

    return {
        metadata: metadata({ name, category, ...node.frontmatter }),
        content
    };
};

const onCreatePoemNode = async props => {
    const {
        node,
        actions,
        createContentDigest,
        createNodeId,
        getNode
    } = props;
    const post = await postNodeOfPoem(props);
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
        case 'Poem':
            return await onCreatePoemNode(props);
    }
};
