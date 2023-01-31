import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs = resolve('./type-defs.gql');

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

const postNodeOfPoem = async ({ node, getNode }) => {
    const parent = getNode(node.parent);
    const category = parent.sourceInstanceName;
    const name = parent.name;

    const ast = node.content;

    const description = ast[0]
          .slice(0, 2)
          .map(x => x.join('\u2009\u2014\u2009'))
          .join('\n');

    return {
        metadata: metadata({ name, category, description, ...node.frontmatter })
    };
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    const types = await fs.readFile(typeDefs, { encoding: `utf-8` });
    await createTypes(types);
};

export const shouldOnCreateNode = ({node}) => 'Poem' === node.internal.type;

export const onCreateNode = async props => {
    const {
        node,
        actions,
        createContentDigest,
        createNodeId,
        getNode
    } = props;
    const post = await postNodeOfPoem(props);

    const postPoem = { ...post, poem: node };

    const postNode = {
        ...postPoem,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> PostPoem`),
        internal: {
            type: 'PostPoem',
            contentDigest: createContentDigest(postPoem)
        }
    };
    await actions.createNode(postNode);
    await actions.createParentChildLink({ parent: node, child: postNode });
};
