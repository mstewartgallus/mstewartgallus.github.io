const maybePs = async x => {
    try {
        return await x;
    } catch (e) {
        console.warn(e);
        return;
    }
};

export const search = async (s, opts) => {
    // Work around dynamically importing pagefind getting messed up by
    // webpack
    const realImport = Function('return x => import(x);')();

    const pf = await maybePs(realImport("/static/pagefind/pagefind.js"));
    if (!pf) {
        return;
    }

    return await pf.search(s, opts);
};
