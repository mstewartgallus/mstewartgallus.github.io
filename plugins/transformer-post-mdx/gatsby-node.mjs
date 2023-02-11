import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";
import { createPostNode } from "../post/index.js";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

const postNodeOfMdx = ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    return { name, category, ...node.frontmatter };
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) => 'Mdx' === node.internal.type;

export const onCreateNode = async props => {
    const { node, getNode, actions, createNodeId, createContentDigest } = props;

    const postId = createNodeId(`${node.id} >>> Post`);
    const postMdxId = createNodeId(`${node.id} >>> PostMdx`);

    const postMdx = { mdx: node.id };

    const post = postNodeOfMdx({ node, getNode });

    const postMdxNode = {
        ...postMdx,
        id: postMdxId,
        parent: postId,
        children: [],
        internal: {
            type: 'PostMdx',
            contentDigest: createContentDigest(postMdx)
        }
    };

    await createPostNode(postId, node.id, postMdxId, post, props);
    await actions.createNode(postMdxNode);
};
