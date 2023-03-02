import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createIndexNode } from "../post/index.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);

export const sourceNodes = async helpers => {
    const {
        actions: { createNode },
        createNodeId,
        createContentDigest
    } = helpers;

    const indexId = createNodeId(`Index`);
    const indexAllId = createNodeId(`IndexAll`);

    await createNode({
        id: indexAllId,
        parent: indexId,
        children: [],
        internal: {
            type: 'IndexAll',
            contentDigest: createContentDigest({})
        }
    });

    await createIndexNode(indexId, indexAllId, helpers);
}
