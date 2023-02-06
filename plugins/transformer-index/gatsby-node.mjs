import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) => 'Link' === node.internal.type;

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest, getNode} = props;

    const label = node.label;

    const id = createNodeId(`${label} >>> INDEX`);
    if (getNode(id)) {
        return;
    }

    const indexNode = {
        label,
        id,
        parent: null,
        children: [],
        internal: {
            type: 'Index',
            contentDigest: createContentDigest(label)
        }
    };
    await actions.createNode(indexNode);
};
