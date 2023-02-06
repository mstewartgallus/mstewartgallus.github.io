import { promises as fs } from "fs";
import slugify from "slugify";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

const slug = (source, args, context, info) => {
    let { category, name } = source;
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


const next = async (source, args, context, info) => {
    const { post, index, date } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['content.date'], order: ['ASC'] },
            filter: {
                content: {
                    index: { id: { eq: index } },
                    post: { id: { ne: post } },
                    date: { gte: date }
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
    const { post, index, date } = source;
    const { entries } = await context.nodeModel.findAll({
        type: 'Link',
        query: {
            limit: 1,
            sort: { fields: ['content.date'], order: ['DESC'] },
            filter: {
                content: {
                    index: { id: { eq: index } },
                    post: { id: { ne: post } },
                    date: { lte: date }
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

const nil = (source, args, context, info) => source[info.fieldName] ?? [];

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const createResolvers = async ({ createResolvers }) => {
    await createResolvers({
        Content: {
            next: { type: 'Link', resolve: next },
            previous: { type: 'Link', resolve: previous }
        },
        Metadata: {
            slug: { type: 'String!', resolve: slug },
            notice: { type: '[String!]!', resolve: nil },
            tags: { type: '[String!]!', resolve: nil },
            places: { type: '[String!]!', resolve: nil },
            people: { type: '[String!]!', resolve: nil },
        }
    });
};
