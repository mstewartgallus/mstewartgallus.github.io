import { promises as fs } from "fs";
import * as path from "path";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createPostNode } from "../post/index.mjs";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

const postNodeOfMdx = ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    return { name, category, ...node.frontmatter };
};

const relpath = p => path.relative("./blog", p);

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => {
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({
    node: { internal: { type }}
}) => 'Mdx' === type;

export const onCreateNode = async helpers => {
    const {
        node,
        actions: { createNode },
        getNode, createNodeId, createContentDigest
    } = helpers;

    const postId = createNodeId(`${node.id} >>> Post`);
    const postMdxId = createNodeId(`${node.id} >>> PostMdx`);

    const path = relpath(node.internal.contentFilePath);

    const postMdx = { mdx: node.id, path };

    await createNode({
        ...postMdx,
        id: postMdxId,
        parent: postId,
        children: [],
        internal: {
            type: 'PostMdx',
            contentDigest: createContentDigest(postMdx)
        }
    });

    await createPostNode(postId, node.id, postMdxId,
                         postNodeOfMdx({ node, getNode }),
                         helpers);
};
