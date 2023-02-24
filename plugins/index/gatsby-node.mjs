import { promises as fs } from "fs";
import { resolve, relative } from "path";
import glob from "globby";
import { watchDirectory } from "gatsby-page-utils";
import { mkResolve } from "../../src/utils/resolve.mjs";
import { createLinkNode, createIndexNode } from "../post/index.mjs";

const resolver = mkResolve(import.meta);

const typeDefs = fs.readFile(resolver('./type-defs.gql'),
                             { encoding: 'utf-8' });

const leafs = [];

const sourceIndex = leafs => {
    return leafs.map(({path, component, context}, ix) => {
        const imp = JSON.stringify(component);
        const exp = JSON.stringify(path);
        return `import { default as C${ix} } from ${imp};
const Leaf${ix} = ({children, ...props}) =>
  <C${ix} {...props}>{children}</C${ix}>;
export { Leaf${ix} as ${exp} };
`;
    }).join('\n');
};

const createIndex = async (leafs, helpers, options) => {
    const { cache } = helpers;
    const { path, name } = options;
    const indexFile = resolve(cache.directory, `${name}.js`);

    const source = sourceIndex(leafs);

    await fs.writeFile(indexFile, source);
};

export const createSchemaCustomization = async ({ actions, schema }) => {
    const { createTypes } = actions;
    await createTypes(await typeDefs);
};

export const onCreatePage = async (helpers, options) => {
    const { page, actions, createNodeId, createContentDigest } = helpers;
    const { deletePage, createNode } = actions;
    // FIXME regex ?
    if (!page.path.startsWith('/blog')) {
        return;
    }

    const leafId = createNodeId(`${page.id} >>> Leaf`);

    await deletePage(page);

    let leaf;
    {
        const { path, component, context } = page;
        leaf = { path, component, context };
    }

    const leafNode = {
        ...leaf,
        id: leafId,
        parent: null,
        children: [],
        internal: {
            type: 'Leaf',
            contentDigest: createContentDigest(leaf)
        }
    };
    await createNode(leafNode);

    leafs.push(leafNode);

    await createIndex(leafs, helpers, options);
};

// export const onPostBootstrap = async (helpers, options, doneCb) => {
//     const { path } = options;

//     const globstr = `**.mdx`;

//     const paths = new PathSet(path);

//     (async () => {
//         await watchDirectory(
//             path, globstr,
//             async path => {
//                 paths.add(path);
//                 await createIndex(paths, helpers, options);
//             },
//             async path => {
//                 paths.delete(path);
//                 await createIndex(paths, helpers, options);
//             }
//         );
//         await doneCb(null, null);
//     })();

//     const initpaths = await glob(globstr, { cwd: path });
//     for (const file of initpaths) {
//         paths.add(file);
//     }

//     await createIndex(paths, helpers, options);
// };

export const onCreateWebpackConfig = async helpers => {
    const { actions, cache } = helpers;
    const { setWebpackConfig } = actions;

    await setWebpackConfig({
        resolve: {
            alias: {
                ['gatsby-plugin-index/index']: cache.directory
            }
        }
    });
};

export const pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        path: Joi.string().required(),
        name: Joi.string().required()
    });
};
