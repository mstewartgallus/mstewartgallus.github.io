import { promises as fs } from "fs";
import { createLinkNode } from "../post/index.mjs";

export const shouldOnCreateNode = ({
    node: { internal: { type }}
}) => 'Post' === type;

// FIXME awkward
const getIndices = async ({getNodesByType}) => {
    const indices = new Map(getNodesByType('IndexCategory')
                            .map(index => [index.category, index]));
    return indices;
};

export const onCreateNode = async helpers => {
    const {
        node,
        actions: { createNode },
        createNodeId
    } = helpers;

    const { category } = node;

    const linkId = createNodeId(`${node.id} >>> ${category} >>> Link`);

    const indices = await getIndices(helpers);

    const index = indices.get(category);
    if (!index) {
        throw new Error(`No index for category ${category}`);
    }
    await createLinkNode(linkId, node, index.parent, helpers);
};
