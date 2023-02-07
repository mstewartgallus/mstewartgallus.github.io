import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";
import { createLinkNode } from "../post/index.js";

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

    const index = createNodeId(`${category} >>> Index`);
    if (!getNode(index)) {
        const indexNode = {
            category,
            id: index,
            parent: null,
            children: [],
            internal: {
                type: 'IndexCategory',
                contentDigest: createContentDigest(category)
            }
        };
        await actions.createNode(indexNode);
    }

    await createLinkNode(index, node, props);
};
