import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

const next = async (source, args, context, info) => {
    const { id, date, category } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['date'], order: ['ASC'] },
            filter: {
                id: { ne: id },
                category: { eq: category },
                date: { gte: date }
            }
        }
    });
    const x = Array.from(entries);
    if (x.length > 0) {
        return x[0];
    }
    return null;
};

const previous = async (source, args, context, info) => {
    const { id, date, category } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['date'], order: ['DESC'] },
            filter: {
                id: { ne: id },
                category: { eq: category },
                date: { lte: date }
            }
        }
    });
    const x = Array.from(entries);
    if (x.length > 0) {
        return x[0];
    }
    return null;
};

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);

export const createResolvers = ({ createResolvers }) =>
createResolvers({
    Link: {
        next: { type: 'Link', resolve: next },
        previous: { type: 'Link', resolve: previous }
    }
});

const createLinkNode = async (id, post, category, {
    actions: { createNode, createParentChildLink },
    createNodeId,
    createContentDigest,
    getNode
}) => {
    const link = { category, date: post.date };

    const linkNode = {
        ...link,
        id,
        parent: post.id,
        children: [],
        internal: {
            type: 'Link',
            contentDigest: createContentDigest(link)
        }
    };

    await Promise.all([
        createNode(linkNode),
        createParentChildLink({ parent: post, child: linkNode })
    ]);
};

export const shouldOnCreateNode = ({
    node: { internal: { type }}
}) => 'Post' === type;

export const onCreateNode = async helpers => {
    const {
        node,
        actions: { createNode },
        createNodeId
    } = helpers;

    await Promise.all([
        createLinkNode(createNodeId(`${node.id} >>> Link`),
                       node,
                       '',
                       helpers),
        createLinkNode(createNodeId(`${node.id} >>> ${node.category} >>> Link`),
                       node,
                       node.category,
                       helpers)
    ]);
};
