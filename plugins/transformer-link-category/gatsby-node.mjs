import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createLinkNode, createIndexNode } from "../post/index.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);

export const shouldOnCreateNode = ({
    node: { internal: { type }}
}) => 'Post' == type;

export const onCreateNode = async helpers => {
    const {
        node,
        actions: { createNode },
        createNodeId, createContentDigest, getNode
    } = helpers;

    const { category } = node;

    const linkId = createNodeId(`${node.id} >>> ${category} >>> Link`);
    const indexId = createNodeId(`${category} >>> Index`);
    const indexCategoryId = createNodeId(`${category} >>> IndexCategory`);

    await createIndexNode(indexId, indexCategoryId, helpers);
    await createNode({
            category,
            id: indexCategoryId,
            parent: indexId,
            children: [],
            internal: {
                type: 'IndexCategory',
                contentDigest: createContentDigest(category)
            }
    });

    await createLinkNode(linkId, node.id, indexId, helpers);
};
