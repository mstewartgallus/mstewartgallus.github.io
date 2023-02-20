const blogMap = {};

// eslint-disable-next-line
for (const blog of GATSBY_MDX_PATHS) {
    const module = await import(/* webpackMode: "eager" */ `../../blog/${blog}.mdx`);
    blogMap[blog] = module.default;
}

export default blogMap;
