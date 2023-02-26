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
    actions: { createNode, createParentChildLink },
    createNodeId,
    createContentDigest,
    getNode
}) => {
    isString(id);
    isString(index);
    isString(post);

    const link = { index };

    await createNode({
        ...link,
        id,
        parent: post,
        children: [],
        internal: {
            type: 'Link',
            contentDigest: createContentDigest(link)
        }
    }, { name: 'post' });

    const parent = getNode(post);
    const child = getNode(id);

    await createParentChildLink({ parent, child });
};

export const createPostNode = async (id, parent, child, frontmatter, {
    actions: { createNode },
    createNodeId,
    createContentDigest
}) => {
    isString(id);
    isString(parent);
    truthy(frontmatter);
    isString(child);

    const m = metadata(frontmatter);

    await createNode({
        ...m,
        children: [child],
        parent: parent,
        id,
        internal: {
            type: 'Post',
            contentDigest: createContentDigest(m)
        }
    }, { name: 'post' });
};

export const createIndexNode = async (id, child, {
    actions: { createNode },
    createNodeId,
    createContentDigest
}) => {
    isString(id);
    isString(child);

    await createNode({
        children: [child],
        parent: null,
        id,
        internal: {
            type: 'Index',
            contentDigest: createContentDigest({})
        }
    }, { name: 'post' });
};
