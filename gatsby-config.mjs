import RemarkGfm from 'remark-gfm';
import RehypeSlug from 'rehype-slug';
import { mkResolve } from "./src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

export const siteMetadata = {
    title: "Words to Kick Your Teeth Out",
    description: "lol lmao",
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

export const jsxRuntime = "automatic";

export const graphqlTypegen = true;

export const flags = {
    DEV_SSR: true,
    PARALLEL_SOURCING: true,
    FAST_DEV: true
};

export const plugins = [
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
    "transformer-post-mdx",
    "transformer-post-poem",
    "transformer-link-all",
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
