import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";
import { createLinkNode, createIndexNode } from "../post/index.js";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) =>
'Post' == node.internal.type;

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest, getNode} = props;

    const { category } = node;

    const linkId = createNodeId(`${node.id} >>> ${category} >>> Link`);
    const indexId = createNodeId(`${category} >>> Index`);
    const indexCategoryId = createNodeId(`${category} >>> IndexCategory`);

    if (!getNode(indexId)) {
        const indexNode = {
            category,
            id: indexCategoryId,
            parent: indexId,
            children: [],
            internal: {
                type: 'IndexCategory',
                contentDigest: createContentDigest(category)
            }
        };
        await Promise.all([
            createIndexNode(indexId, indexCategoryId, props),
            actions.createNode(indexNode)
        ]);
    }

    await createLinkNode(linkId, node.id, indexId, props);
};
