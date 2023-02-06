import RemarkGfm from 'remark-gfm';
import RehypeSlug from 'rehype-slug';


export const siteMetadata = {
    title: "Words to Kick Your Teeth Out",
    description: "lol lmao",
    siteUrl: "https://mstewartgallus.github.io"
};

const { title, siteUrl } = siteMetadata;

const query =
`{
  allPost(sort: { metadata: { date: DESC }}) {
   nodes {
     metadata {
       title
       date
       slug
     }
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
                    const { title, category, slug, date} = node.metadata;
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
            const { metadata } = node;
            return { ...metadata, path: metadata.slug };
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

export const graphqlTypegen = true;

export const flags = {
    DEV_SSR: true,
    PARALLEL_SOURCING: true
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
            extensions: ['.md', '.mdx', '.markdown'],
            mdxOptions: {
                remarkPlugins: [RemarkGfm],
                rehypePlugins: [RehypeSlug],
            }
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './blog/prose',
            name: 'Prose'
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './blog/poem',
            name: 'Poem'
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: './blog/web',
            name: 'Web'
        }
    },
    "pagefind",
    "post",
    "site",
    "transformer-poem",
    "transformer-post-mdx",
    "transformer-post-poem",
    "transformer-link-all",
    "transformer-link-category",
    "publish-post-mdx",
    "publish-post-poem",
    "layout"
];
