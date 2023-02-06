import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) =>
['PostPoem', 'PostMdx'].includes(node.internal.type);

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest, getNode} = props;

    const post = node.id;
    const { date, category } = node.metadata;

    const index = createNodeId(`${category} >>> Index`);
    if (!getNode(index)) {
        const indexNode = {
            category,
            id: index,
            parent: null,
            children: [],
            internal: {
                type: 'IndexCategory',
                contentDigest: createContentDigest(category)
            }
        };
        await actions.createNode(indexNode);
    }

    const content = { index, post, date };
    const link = { content };

    const linkNode = {
        ...link,
        id: createNodeId(`${node.id} >>> Link`),
        parent: node.id,
        children: [],
        internal: {
            type: 'LinkCategory',
            contentDigest: createContentDigest(link)
        }
    };

    await Promise.all([
        actions.createNode(linkNode),
        actions.createParentChildLink({ parent: node, child: linkNode })
    ]);
};
