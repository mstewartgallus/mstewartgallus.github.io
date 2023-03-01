import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

const next = async (source, args, context, info) => {
    const { parent, index } = source;
    const post = await context.nodeModel.getNodeById({id: parent, type: 'Post'});
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['post.date'], order: ['ASC'] },
            filter: {
                index: { id: { eq: index } },
                post: {
                    id: { ne: parent },
                    date: { gte: post.date }
                }
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
    const { parent, index } = source;
    const post = await context.nodeModel.getNodeById({id: parent, type: 'Post'});
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['post.date'], order: ['DESC'] },
            filter: {
                index: { id: { eq: index } },
                post: {
                    id: { ne: parent },
                    date: { lte: post.date }
                }
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
