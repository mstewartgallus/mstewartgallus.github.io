import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";
import { createPostNode } from "../post/index.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

const postNodeOfPoem = ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    const ast = node.content;

    const description = ast[0]
          .slice(0, 2)
          .map(x => x.join('\u2009\u2014\u2009'))
          .join('\n');

    return { name, category, description, ...node.frontmatter };
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) => 'Poem' === node.internal.type;

export const onCreateNode = async props => {
    const { node, getNode, actions, createNodeId, createContentDigest } = props;

    const postId = createNodeId(`${node.id} >>> Post`);
    const postPoemId = createNodeId(`${node.id} >>> PostPoem`);

    const postPoem = { poem: node.id };

    const post = postNodeOfPoem({ node, getNode });

    const postPoemNode = {
        ...postPoem,
        id: postPoemId,
        parent: postId,
        children: [],
        internal: {
            type: 'PostPoem',
            contentDigest: createContentDigest(postPoem)
        }
    };

    await createPostNode(postId, node.id, postPoemId, post, props);
    await actions.createNode(postPoemNode);
};
