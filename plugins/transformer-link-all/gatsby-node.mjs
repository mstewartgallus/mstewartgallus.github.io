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

export const sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    await actions.createNode({
        id: createNodeId(`Index`),
        parent: null,
        children: [],
        internal: {
            type: 'IndexAll',
            contentDigest: createContentDigest({})
        }
    });
}

export const onCreateNode = async props => {
    const {node, actions, createNodeId, createContentDigest} = props;

    const post = node.id;
    const { date } = node.metadata;

    const content = { index: createNodeId(`Index`),
                      post, date };
    const link = { content };

    const linkNode = {
        ...link,
        id: createNodeId(`${node.id} >>> Link`),
        parent: node.id,
        children: [],
        internal: {
            type: 'LinkAll',
            contentDigest: createContentDigest(link)
        }
    };

    await Promise.all([
        actions.createNode(linkNode),
        actions.createParentChildLink({ parent: node, child: linkNode })
    ]);
};
