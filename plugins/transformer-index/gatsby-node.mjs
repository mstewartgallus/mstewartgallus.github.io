import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const ALL = 'ALL';

const resolve = mkResolve(import.meta);

const typeDefs = resolve('./type-defs.gql');

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

const onCreatePostNode = async props => {
    const {node, actions, createNodeId, createContentDigest} = props;

    const index = await getIndexNode(ALL, props);

    const link = { index, post: node, date: node.metadata.date };
    // posts.sort((x, y) => {
    //     const xdate = x.metadata.date;
    //     const ydate = y.metadata.date;
    //     return xdate.localeCompare(ydate);
    // });
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

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    const types = await fs.readFile(typeDefs, { encoding: `utf-8` });
    await createTypes(types);
};

export const onCreateNode = async props => {
    switch (props.node.internal.type) {
        case 'Post':
            return await onCreatePostNode(props);
    }
};
