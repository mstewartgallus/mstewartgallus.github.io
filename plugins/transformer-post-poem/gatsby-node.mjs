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

const onCreatePoemNode = async props => {
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

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    const types = await fs.readFile(typeDefs, { encoding: `utf-8` });
    await createTypes(types);
};

export const onCreateNode = async props => {
    switch (props.node.internal.type) {
        case 'Poem':
            return await onCreatePoemNode(props);
    }
};
