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

const getIndexFile = async ({cache}) => {
    // FIXME have different directories for different plugin instances?
    return resolve(cache.directory, 'index.js');
};

const sourceIndex = paths => {
    const imports =
        paths.map(([key, val], ix) => {
            const imp = JSON.stringify(val);
            const exp = JSON.stringify(key);
            return `import { default as c${ix} } from ${imp};`;
        }).join('\n');

    const obj =
        paths.map(([key, val], ix) => {
            const exp = JSON.stringify(key);
            return `${exp}: c${ix}`;
        }).join(',\n');

    return `${imports}

export default Object.freeze({
${obj}
});`;
};

const createIndex = async (paths, helpers, { path }) => {
    const { cache } = helpers;

    const mapped =
        Array.from(paths)
            .map(p =>
                [relative(path, p), relative(cache.directory, p)]);

    const source = sourceIndex(mapped);

    await fs.writeFile(await getIndexFile(helpers), source);
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

export const onCreateWebpackConfig = async (helpers, { path, "module": mod }) => {
    const { actions } = helpers;
    const { setWebpackConfig } = actions;

    await setWebpackConfig({
        resolve: {
            alias: {
                [mod + '$']: await getIndexFile(helpers)
            }
        }
    });
};

export const pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        path: Joi.string().required(),
        "module": Joi.string().required()
    });
};
