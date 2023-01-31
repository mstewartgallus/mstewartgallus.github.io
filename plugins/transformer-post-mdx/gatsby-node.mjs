import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = resolve('./type-defs.gql');

const metadata = frontmatter => {
    let {
        description, name, category, date,
        title, subtitle,
        notice, tags, people, places,
        author
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

    people = people ?? [];
    notice = notice ?? [];
    tags = tags ?? [];
    places = places ?? [];

    return {
        description, date, category,
        name,
        title, subtitle,
        notice, tags, places, people,
        author
    };
};

const postNodeOfMdx = async ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    return {
        metadata: metadata({ name, category, ...node.frontmatter })
    };
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    const types = await fs.readFile(typeDefs, { encoding: `utf-8` });
    await createTypes(types);
};

export const shouldOnCreateNode = ({node}) => 'Mdx' === node.internal.type;

export const onCreateNode = async ({
    node,
    actions,
    createContentDigest,
    createNodeId,
    getNode
}) => {
    const post = await postNodeOfMdx({ node, getNode });
    const postMdx = { ...post, mdx: node };
    const postNode = {
        ...postMdx,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> PostMdx`),
        internal: {
            type: 'PostMdx',
            contentDigest: createContentDigest(postMdx)
        }
    };
    await actions.createNode(postNode);
    await actions.createParentChildLink({ parent: node, child: postNode });
};
