const truthy = x => {
    if (!x) {
        throw new Error(`invalid ${x}`);
    }
};


const fields = [
    'description', 'name', 'category', 'date',
    'title', 'subtitle',
    'notice', 'tags', 'places', 'people',
    'author'
];

const metadata = frontmatter => {
    const {
        name, category, date
    } = frontmatter;

    if (!category) {
        throw new Error("no category");
    }
    if (!date) {
        throw new Error("no date");
    }
    if (!name) {
        throw new Error("no name");
    }

    const meta = {};
    for (const field of fields) {
        meta[field] = frontmatter[field];
    }
    return meta;
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

export const createPostNode = async (node, frontmatter, {
    actions,
    createNodeId,
    createContentDigest
}) => {
    truthy(node);
    truthy(frontmatter);

    const m = metadata(frontmatter);

    const postNode = {
        ...m,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> Post`),
        internal: {
            type: 'Post',
            contentDigest: createContentDigest(m)
        }
    };
    await Promise.all([
        actions.createNode(postNode, { name: 'post' }),
        actions.createParentChildLink({ parent: node, child: postNode })
    ]);
    return postNode;
};
