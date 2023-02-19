import * as React from "react";

// eslint-disable-next-line
const paths = GATSBY_MDX_PATHS;

const map = Object.fromEntries(await Promise.all(paths.map(async ([id, path], ix) => {
    const mod = await import(/* webpackMode: "eager" */ `../../blog/${path}.mdx`);
    return [id, mod.default];
})));

export const useMdx = path => {
    return React.useMemo(() => {
        const com = map[path];
        if (!com) {
            throw new Error(`path not cached ${path}`);
        }
        return com;
    }, [path]);
};

export default useMdx;
