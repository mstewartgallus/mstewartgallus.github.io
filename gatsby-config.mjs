import RemarkGfm from 'remark-gfm';
import RehypeSlug from 'rehype-slug';
import { mkResolve } from "./src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const siteMetadata = {
    title: "Words to Kick Your Teeth Out",
    description: "weird stories and poetry, some webdev",
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
    {
        resolve: "gatsby-plugin-sitemap",
        options: sitemap
    },
    {
        resolve: "gatsby-plugin-feed",
        options: feed
    },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            extensions: ['.mdx'],
            mdxOptions: {
                remarkPlugins: [RemarkGfm],
                rehypePlugins: [RehypeSlug],
            }
        }
    },
    "gatsby-transformer-yaml",
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './content/meta',
            name: 'Content'
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './content/blog/prose',
            name: 'Prose'
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './content/blog/poem',
            name: 'Poem'
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './content/blog/web',
            name: 'Web'
        }
    },
    "pagefind",
    "webpack",
    "post",
    "site",
    "transformer-poem",
    {
        resolve: "transformer-post-mdx",
        options: {
            name: 'Prose'
        }
    },
    {
        resolve: "transformer-post-mdx",
        options: {
            name: 'Poem'
        }
    },
    {
        resolve: "transformer-post-mdx",
        options: {
            name: 'Web'
        }
    },
    "transformer-post-poem",
    "transformer-index-all",
    "transformer-link-all",
    "transformer-index-category",
    "transformer-link-category",
    "publish-post-mdx",
    "publish-post-poem",
    "index",
    {
        resolve: "layout",
        options: {
            component: resolve('./src/components/layout.jsx')
        }
    },
    {
        resolve: "root",
        options: {
            component: resolve('./src/components/root.jsx')
        }
    }
];

const config = {
    siteMetadata,
    jsxRuntime,
    graphqlTypegen,
    flags,
    plugins
};
export default config;
