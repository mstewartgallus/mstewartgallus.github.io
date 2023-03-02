import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";
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

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);

export const shouldOnCreateNode = ({node: { internal: { type }}}) => 'Poem' === type;

export const onCreateNode = async helpers => {
    const {
        node,
        actions: { createNode },
        getNode,
        createNodeId, createContentDigest
    } = helpers;

    const postId = createNodeId(`${node.id} >>> Post`);
    const postPoemId = createNodeId(`${node.id} >>> PostPoem`);

    const postPoem = { poem: node.id };

    const post = postNodeOfPoem({ node, getNode });

    await Promise.all([
        createNode({
            ...postPoem,
            id: postPoemId,
            parent: postId,
            children: [],
            internal: {
                type: 'PostPoem',
                contentDigest: createContentDigest(postPoem)
            }
        }),
        createPostNode(postId, node.id, postPoemId, post, helpers)
    ]);
};
