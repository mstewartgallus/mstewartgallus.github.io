import { promises as fs } from "fs";
import { resolve, relative } from "path";
import glob from "globby";
import { watchDirectory } from "gatsby-page-utils";

class PathSet {
    #cwd;
    #x;
    constructor(cwd) {
        this.#cwd = cwd;
        this.#x = new Set();
    }
    add(v) {
        v = resolve(this.#cwd, v);
        this.#x.add(v);
    }
    delete(v) {
        this.#x.delete(resolve(this.#cwd, v));
    }

    [Symbol.iterator]() {
        return this.#x[Symbol.iterator]();
    }
};

const sourceIndex = paths => {
    return paths.map(([key, val]) => {
            const imp = JSON.stringify(val);
            const exp = JSON.stringify(key);
            return `export { default as ${exp} } from ${imp};`;
        }).join('\n');
};

const createIndex = async (paths, { cache }, { path, name }) => {
    const indexFile = resolve(cache.directory, `${name}.js`);

    const mapped =
        Array.from(paths)
            .map(p =>
                [relative(path, p), relative(cache.directory, p)]);

    const source = sourceIndex(mapped);

    await fs.writeFile(indexFile, source);
};

export const onPostBootstrap = async (helpers, options, doneCb) => {
    const { path } = options;

    const globstr = `**.mdx`;

    const paths = new PathSet(path);

    (async () => {
        await watchDirectory(
            path, globstr,
            async path => {
                paths.add(path);
                await createIndex(paths, helpers, options);
            },
            async path => {
                paths.delete(path);
                await createIndex(paths, helpers, options);
            }
        );
        await doneCb(null, null);
    })();

    const initpaths = await glob(globstr, { cwd: path });
    for (const file of initpaths) {
        paths.add(file);
    }

    await createIndex(paths, helpers, options);
};

export const onCreateWebpackConfig = ({
    actions: { setWebpackConfig },
    cache
}) => setWebpackConfig({
    resolve: {
        alias: {
            ['gatsby-plugin-index/index']: cache.directory
        }
    }
});

export const pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        path: Joi.string().required(),
        name: Joi.string().required()
    });
};
