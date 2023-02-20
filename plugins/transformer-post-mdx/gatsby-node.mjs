import { promises as fs } from "fs";
import * as path from "path";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createPostNode } from "../post/index.mjs";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

const postNodeOfMdx = ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    return { name, category, ...node.frontmatter };
};

const relpath = p => path.relative("./blog", p);

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) => 'Mdx' === node.internal.type;

export const onCreateNode = async props => {
    const { node, getNode, actions, createNodeId, createContentDigest } = props;

    const postId = createNodeId(`${node.id} >>> Post`);
    const postMdxId = createNodeId(`${node.id} >>> PostMdx`);

    const path = relpath(node.internal.contentFilePath);

    const postMdx = { mdx: node.id, path };

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

    await Promise.all([
        createPostNode(postId, node.id, postMdxId, post, props),
        actions.createNode(postMdxNode)]);
};
