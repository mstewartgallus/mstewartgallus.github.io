import { promises as fs } from "fs";
import grayMatter from "gray-matter";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

const frontmatter = source => {
    return grayMatter(source, {
        language: 'yaml',
        engines: {
            js: () => {
                return {}
            },
            javascript: () => {
                return {}
            },
            json: () => {
                return {}
            },
        }
    });
};

const parsePoem = source => {
    source = source.trim();
    const stanzas = source.split('\n\n');
    return stanzas.map(stanza => {
        stanza = stanza.trim();
        const lines = stanza.split('\n');
        return lines.map(line => {
            line = line.trim();
            const segments = line.split('‖');
            return segments.map(seg => seg.trim());
        });
    });
};

const poemNodeOfFile = async ({ node, loadNodeContent }) => {
    const name = node.name;

    const { content, data } = frontmatter(await loadNodeContent(node));

    const ast = parsePoem(content);

    return {
        frontmatter: data,
        content: ast
    };
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const shouldOnCreateNode = ({node}) =>
'File' === node.internal.type && 'poem' === node.extension;

export const onCreateNode = async props => {
    const {
        node,
        actions,
        createContentDigest,
        createNodeId,
        getNode
    } = props;
    const poem = await poemNodeOfFile(props);
    const poemNode = {
        ...poem,
        children: [],
        parent: node.id,
        id: createNodeId(`${node.id} >>> POEM`),
        internal: {
            type: 'Poem',
            contentDigest: createContentDigest(poem)
        }
    };

    await actions.createNode(poemNode);
    await actions.createParentChildLink({ parent: node, child: poemNode });
};
