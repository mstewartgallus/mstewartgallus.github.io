import RemarkDefinitionList from 'remark-definition-list';
import RemarkMdxFrontmatter from 'remark-mdx-frontmatter';
import RemarkGfm from 'remark-gfm';
import RehypeSlug from 'rehype-slug';
import RehypeMdxCodeProps from 'rehype-mdx-code-props';
import { mkResolve } from "./src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const siteMetadata = {
    title: "Constant Circuits",
    description: "some webdev, concurrency",
    siteUrl: "https://mstewartgallus.github.io"
};

const { title, siteUrl } = siteMetadata;

const query =
`{
  allPost(sort: { date: DESC }) {
   nodes {
     title
     date
     slug
   }
  }
}`;

const feed = {
    feeds: [
        {
            query,
            title,
            match: "^/(poem|prose|web)/",
            output: "/feed.xml",
            serialize: ({ query: { allPost } }) => {
                return allPost.nodes.map(node => {
                    const { title, category, slug, date} = node;
                    return {
                        title,
                        categories: [category],
                        date,
                        url: siteUrl + slug,
                        guid: siteUrl + slug,
                        custom_elements: []
                    };
                });
            }
        }
    ]
};

const sitemap = {
    query,
    excludes: [],
    resolveSiteUrl: () => siteUrl,
    resolvePages: ({ allPost }) => {
        return allPost.nodes.map(node => {
            return { ...node, path: node.slug };
        });
    },
    resolvePagePath: page => page.slug,
    filterPages: page => false,
    serialize: metadata => {
        const { slug, date} = metadata;
        return {
            url: siteUrl + slug,
            lastmod: date
        };
    }
};

const sources = [
    ['Pages', './src/pages'],
    ['Content', './content/meta']
];

const posts = ['Web'];

const jsxRuntime = "automatic";

const graphqlTypegen = true;

const flags = {
    DEV_SSR: true,
    PARALLEL_SOURCING: true,
    FAST_DEV: true
};

const plugins = [
    {
        resolve: "gatsby-plugin-typescript",
        options: {
            jsxPragma: "jsx",
            onlyRemoveTypeImports: true,
        }
    },
    // {
    //     resolve: "gatsby-plugin-sitemap",
    //     options: sitemap
    // },
    // {
    //     resolve: "gatsby-plugin-feed",
    //     options: feed
    // },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            extensions: ['.mdx'],
            mdxOptions: {
                remarkPlugins: [
                    RemarkGfm,
                    RemarkDefinitionList,
                    RemarkMdxFrontmatter
                ],
                rehypePlugins: [
                    RehypeSlug,
                    // Must be last
                    RehypeMdxCodeProps
                ],
            }
        }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-yaml",
    ...sources.map(([name, path]) => ({
        resolve: "gatsby-source-filesystem",
        options: { path, name }
    })),
    "pagefind",
    "webpack",
    "post",
    "site",
    "transformer-poem",
    ...posts.map(name => ({
        resolve: "transformer-post-mdx",
        options: { name }
    })),
    "transformer-post-poem",
    "transformer-link",
    "publish",
    "style",
    "rmannoounce",
    "focus",
    "layout",
    "root",
    "preload"
];

const config = {
    siteMetadata,
    jsxRuntime,
    graphqlTypegen,
    flags,
    plugins
};
export default config;
