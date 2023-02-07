import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";
import { createPostNode } from "../post/index.js";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

const fields = [
    'description', 'name', 'category', 'date',
    'title', 'subtitle',
    'notice', 'tags', 'places', 'people',
    'author'
];

const metadata = frontmatter => {
    const {
        name, category, date
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

    const meta = {};
    for (const field of fields) {
        meta[field] = frontmatter[field];
    }
    return meta;
};

const postNodeOfPoem = ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    const ast = node.content;

    const description = ast[0]
          .slice(0, 2)
          .map(x => x.join('\u2009\u2014\u2009'))
          .join('\n');

    return metadata({ name, category, description, ...node.frontmatter });
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) => 'Poem' === node.internal.type;

export const onCreateNode = async props => {
    const { node, getNode, actions, createNodeId, createContentDigest } = props;

    const post = postNodeOfPoem({ node, getNode });
    const postNode = await createPostNode(node, post, props);

    const postPoem = { post: postNode.id, poem: node.id };

    const postPoemNode = {
        ...postPoem,
        id: createNodeId(`${postNode.id} >>> PostPoem`),
        parent: postNode.id,
        children: [],
        internal: {
            type: 'PostPoem',
            contentDigest: createContentDigest(postPoem)
        }
    };
    await Promise.all([
        actions.createNode(postPoemNode),
        actions.createParentChildLink({ parent: postNode, child: postPoemNode })
    ]);
};
