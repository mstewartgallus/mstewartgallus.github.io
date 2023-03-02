import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createIndexNode } from "../post/index.mjs";

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

    const indexId = createNodeId(`${category} >>> Index`);
    const indexCategoryId = createNodeId(`${category} >>> IndexCategory`);

    await Promise.all([
        createNode({
            category,
            id: indexCategoryId,
            parent: indexId,
            children: [],
            internal: {
                type: 'IndexCategory',
                contentDigest: createContentDigest(category)
            }
        }),
        createIndexNode(indexId, indexCategoryId, helpers)
    ]);
};
