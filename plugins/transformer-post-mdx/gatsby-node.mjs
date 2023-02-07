import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";
import { createPostNode } from "../post/index.js";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

const fields = [
    'description', 'name', 'category', 'date',
    'title', 'subtitle',
    'notice', 'tags', 'places', 'people',
    'author'
];

const metadata = frontmatter => {
    const {
        name, category, date
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

    const meta = {};
    for (const field of fields) {
        meta[field] = frontmatter[field];
    }
    return meta;
};

const postNodeOfMdx = ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    return metadata({ name, category, ...node.frontmatter });
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) => 'Mdx' === node.internal.type;

export const onCreateNode = async props => {
    const { node, getNode, actions, createNodeId, createContentDigest } = props;
    const post = postNodeOfMdx({ node, getNode });
    const postNode = await createPostNode(node, post, props);

    const postMdx = { post: postNode.id, mdx: node.id };

    const postMdxNode = {
        ...postMdx,
        id: createNodeId(`${postNode.id} >>> PostMdx`),
        parent: postNode.id,
        children: [],
        internal: {
            type: 'PostMdx',
            contentDigest: createContentDigest(postMdx)
        }
    };
    await Promise.all([
        actions.createNode(postMdxNode),
        actions.createParentChildLink({ parent: postNode, child: postMdxNode })
    ]);
};
