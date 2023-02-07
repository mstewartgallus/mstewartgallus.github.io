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

export const sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    await actions.createNode({
        id: createNodeId(`Index`),
        parent: null,
        children: [],
        internal: {
            type: 'IndexAll',
            contentDigest: createContentDigest({})
        }
    });
}

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest} = props;
    await createLinkNode(createNodeId(`Index`), node, props);
};
