import { watchDirectory } from "gatsby-page-utils";
import { createFileNodeFromBuffer } from "gatsby-source-filesystem";
import glob from "globby";

const sourceIndex = paths => paths.map(path => {
    const imp = JSON.stringify(`blog/${path}`);
    const exp = JSON.stringify(path);
    return `export { default as ${exp} } from ${imp};`;
}).join('\n');

const createIndex = async (
    paths,
    {
        actions: { setWebpackConfig, createNode },
        getCache, createNodeId
    }, { path }
) => {
    const source = sourceIndex(paths);
    const buffer = Buffer.from(source);
    const file = await createFileNodeFromBuffer({
        name: 'index',
        ext: '.js',
        buffer,
        getCache,
        createNode,
        createNodeId
    });

    const indexFile = file.absolutePath;

    await setWebpackConfig({
        resolve: {
            alias: {
                'blog/index$': indexFile,
                'blog': path
            }
        }
    });
};

export const onCreateWebpackConfig = async (helpers, options, doneCb) => {
    const globstr = `**.mdx`;

    const { path } = options;

    const paths = await glob(globstr, { cwd: path });
    await createIndex(paths, helpers, options);

    (async () => {
        const paths = new Set();
        await watchDirectory(
            path, globstr,
            async path => {
                paths.add(path);
                await createIndex(Array.from(paths), helpers, options);
            },
            async path => {
                paths.delete(path);
                await createIndex(Array.from(paths), helpers, options);
            }
        );
        await doneCb(null, null);
    })();
};

export const pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        path: Joi.string().required()
    });
};
