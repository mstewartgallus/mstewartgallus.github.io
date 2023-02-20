// eslint-disable-next-line
const paths = GATSBY_MDX_PATHS;

const blogMap = {};
await Promise.all(paths.map(async blog => {
    const module = await import(/* webpackMode: "eager" */ `../../blog/${blog}.mdx`);
    blogMap[blog] = module.default;
}));

export default blogMap;
