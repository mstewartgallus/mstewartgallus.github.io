import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createLinkNode, createIndexNode } from "../post/index.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) =>
'Post' == node.internal.type;

export const sourceNodes = async props => {
    const {actions, createNodeId, createContentDigest} = props;

    const indexId = createNodeId(`Index`);
    const indexAllId = createNodeId(`IndexAll`);

    const indexAll = {
        id: indexAllId,
        parent: indexId,
        children: [],
        internal: {
            type: 'IndexAll',
            contentDigest: createContentDigest({})
        }
    };

    await Promise.all([
        createIndexNode(indexId, indexAllId, props),
        actions.createNode(indexAll)]);
}

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest} = props;

    const linkId = createNodeId(`${node.id} >>> Link`);
    const indexId = createNodeId(`Index`);

    await createLinkNode(linkId, node.id, indexId, props);
};
