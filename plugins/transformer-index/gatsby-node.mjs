import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const ALL = 'ALL';

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

const next = async (source, args, context, info) => {
    const { id, date } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['date'], order: ['ASC'] },
            filter: {
                id: { ne: id },
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
    const { id, date } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['date'], order: ['DESC'] },
            filter: {
                id: { ne: id },
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

const indexNodeId = (label, props) => props.createNodeId(`${label} >>> INDEX`);

const createIndexNode = async (label, props) => {
    const {actions, createContentDigest} = props;

    const id = indexNodeId(label, props);

    const node = {
        label,
        id,
        parent: null,
        children: [],
        internal: {
            type: 'Index',
            contentDigest: createContentDigest(label)
        }
    };
    await actions.createNode(node);
    return node;
};

const getIndexNode = async (label, props) => {
    const node = props.getNode(indexNodeId(label, props));
    if (node) {
        return node;
    }
    return await createIndexNode(label, props);
};

export const createResolvers = async ({ createResolvers }) => {
    await createResolvers({
        Link: {
            next: { type: 'Link', resolve: next },
            previous: { type: 'Link', resolve: previous }
        }
    });
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) =>
['PostPoem', 'PostMdx'].includes(node.internal.type);

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest} = props;

    const index = await getIndexNode(ALL, props);

    const link = { index, post: node, date: node.metadata.date };

    const linkNode = {
        ...link,
        id: createNodeId(`${node.id} >>> LINK`),
        parent: node.id,
        children: [],
        internal: {
            type: 'Link',
            contentDigest: createContentDigest(link)
        }
    };
    await actions.createNode(linkNode);
    await actions.createParentChildLink({ parent: node, child: linkNode });
};
