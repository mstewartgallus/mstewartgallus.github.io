const truthy = x => {
    if (!x) {
        throw new Error(`invalid ${x}`);
    }
};

export const createLinkNode = async (index, post, {
    actions,
    createNodeId,
    createContentDigest
}) => {
    truthy(index);
    truthy(post);

    // FIXME
    const nodeId = post.id;
    const date = post.date;
    const link = { index, post: post.id, date };

    const linkNode = {
        ...link,
        id: createNodeId(`${post.id} >>> Link`),
        parent: post.id,
        children: [],
        internal: {
            type: 'Link',
            contentDigest: createContentDigest(link)
        }
    };
    await Promise.all([
        actions.createNode(linkNode, { name: 'post' }),
        actions.createParentChildLink({ parent: post, child: linkNode })
    ]);
    return linkNode;
};

export const createPostNode = async (node, metadata, {
    actions,
    createNodeId,
    createContentDigest
}) => {
    truthy(node);
    truthy(metadata);

    const postNode = {
        ...metadata,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> Post`),
        internal: {
            type: 'Post',
            contentDigest: createContentDigest(metadata)
        }
    };
    await Promise.all([
        actions.createNode(postNode, { name: 'post' }),
        actions.createParentChildLink({ parent: node, child: postNode })
    ]);
    return postNode;
};
