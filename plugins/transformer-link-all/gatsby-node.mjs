import { createLinkNode } from "../post/index.mjs";

export const shouldOnCreateNode = ({node: { internal: { type }}}) =>
'Post' === type;

export const onCreateNode = async helpers => {
    const {node, actions, getNodesByType, createNodeId} = helpers;

    const linkId = createNodeId(`${node.id} >>> Link`);
    const [index] = getNodesByType(`IndexAll`);
    const indexId = index.parent;

    await createLinkNode(linkId, node, indexId, helpers);
};
