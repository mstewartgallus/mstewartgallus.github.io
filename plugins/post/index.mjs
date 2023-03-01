import slugify from "slugify";

const slug = (name, category) => {
    // FIXME
    // YYYY-MM-DD-foo.bar
    const parts = name.slice(0, 11).split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    name = name.slice(11);

    const opts = { lower: true };
    const catSlug = slugify(category, opts);
    const nameSlug = slugify(name, opts);

    return `/${catSlug}/${year}/${month}/${day}/${nameSlug}/`;
};

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

// FIXME
const defaultAuthor = "Molossus Spondee";

const metadata = frontmatter => {
    const {
        title, name, category, date,
        author = defaultAuthor,
        notice = [], tags = [], places = [], people = [],
        description, subtitle
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
    if (!title) {
        throw new Error("no title");
    }

    return {
        slug: slug(name, category),
        title, name, category, date, author,
        notice, tags, places, people,
        description, subtitle
    };
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

    let link;
    {
        const { date } = getNode(post);
        link = { index, date };
    }

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
