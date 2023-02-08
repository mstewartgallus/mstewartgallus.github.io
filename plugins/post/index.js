const truthy = x => {
    if (!x) {
        throw new Error(`falsy ${x}`);
    }
};

const isString = x => {
    if (typeof x !== 'string') {
        throw new Error(`not a stringy ${x}`);
    }
};


const fields = new Set([
    'description', 'name', 'category', 'date',
    'title', 'subtitle',
    'notice', 'tags', 'places', 'people',
    'author'
]);

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
        if (!Object.hasOwn(frontmatter, field)) {
            continue;
        }
        meta[field] = frontmatter[field];
    }
    return meta;
};

export const createLinkNode = async (id, post, index, {
    actions,
    createNodeId,
    createContentDigest,
    getNode
}) => {
    isString(id);
    isString(index);
    isString(post);

    const link = { index };

    const linkNode = {
        ...link,
        id,
        parent: post,
        children: [],
        internal: {
            type: 'Link',
            contentDigest: createContentDigest(link)
        }
    };
    await Promise.all([
        actions.createNode(linkNode, { name: 'post' }),
        actions.createParentChildLink({ parent: getNode(post), child: linkNode })
    ]);
    return linkNode;
};

export const createPostNode = async (id, parent, child, frontmatter, {
    actions,
    createNodeId,
    createContentDigest
}) => {
    isString(id);
    isString(parent);
    truthy(frontmatter);
    isString(child);

    const m = metadata(frontmatter);

    const postNode = {
        ...m,
        children: [child],
        parent: parent,
        id,
        internal: {
            type: 'Post',
            contentDigest: createContentDigest(m)
        }
    };
    await actions.createNode(postNode, { name: 'post' });
    return postNode;
};

export const createIndexNode = async (id, child, {
    actions,
    createNodeId,
    createContentDigest
}) => {
    isString(id);
    isString(child);

    const node = {
        children: [child],
        parent: null,
        id,
        internal: {
            type: 'Index',
            contentDigest: createContentDigest({})
        }
    };
    await actions.createNode(node, { name: 'post' });
    return node;
};
