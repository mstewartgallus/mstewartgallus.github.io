import { promises as fs } from "fs";
import { resolve, relative } from "path";

const createDirectory = async ({ cache }) => {
    const dir = cache.directory;
    return dir;
};


const exts = ['mdx'];

// FIXME configure extensions matched ???
export const shouldOnCreateNode = ({node}) =>
    node.internal.type === 'File'
    && node.sourceInstanceName
    && exts.includes(node.extension);

// Every new File regenerate a new index
export const onCreateNode = async (helpers) => {
    const { node, getNodesByType } = helpers;
    const { sourceInstanceName } = node;

    const indexdir = await createDirectory(helpers);

    const files = (await getNodesByType(`File`))
                      .filter(file =>
                          file.sourceInstanceName === sourceInstanceName
                          && exts.includes(file.extension));

    const imports = files.map((file, ix) => {
        const val = relative(indexdir, file.absolutePath);

        const imp = JSON.stringify(val);
        return `import C${ix} from ${imp};`;
    });

    const exports = files.map((file, ix) => {
        const exp = JSON.stringify(file.relativePath);
        return `[${exp}, C${ix}],`;
    });

    const source = [...imports,
                    "",
                    "const Index = Object.freeze(new Map([",
                    ...exports,
                    "]));",
                    "export default Index;"].join('\n');

    const indexFile = resolve(indexdir, `${sourceInstanceName}.js`);
    await fs.writeFile(indexFile, source);
};

export const onCreateWebpackConfig = async helpers => {
    const { actions } = helpers;
    const { setWebpackConfig } = actions;

    const indexdir = await createDirectory(helpers);

    await setWebpackConfig({
        resolve: {
            alias: {
                ['gatsby-plugin-index/index']: indexdir
            }
        }
    });
}
