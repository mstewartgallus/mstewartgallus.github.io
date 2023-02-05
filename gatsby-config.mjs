import RemarkGfm from 'remark-gfm';
import RehypeSlug from 'rehype-slug';


export const siteMetadata = {
    title: "Words to Kick Your Teeth Out",
    description: "lol lmao",
    siteUrl: "https://mstewartgallus.github.io"
};

const serialize = ({ query: { allLink } }) => {
    const siteUrl = siteMetadata.siteUrl;
    return allLink.nodes.map(node => {
        const { metadata } = node.post;
        return {
            ...metadata,
            url: siteUrl + metadata.slug,
            guid: siteUrl + metadata.slug,
            custom_elements: []
        };
    });
};

const query =
`{
  allLink(sort: { date: DESC }) {
   nodes {
     post {
       metadata {
         title
         date
         slug
       }
     }
   }
  }
}`;

const feed = {
    feeds: [
        {
            serialize,
            query,
            output: "/feed.xml",
            title: siteMetadata.title
        }
    ]
};

export const graphqlTypegen = true;

export const flags = {
    DEV_SSR: true,
    PARALLEL_SOURCING: true
};

export const plugins = [
    "gatsby-plugin-sitemap",
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
    "gatsby-transformer-yaml",
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
    {
        resolve: "gatsby-plugin-feed",
        options: feed
    },
    "pagefind",
    "post",
    "site",
    "transformer-poem",
    "transformer-post-mdx",
    "transformer-post-poem",
    "transformer-index",
    "publish-post-mdx",
    "publish-post-poem",
    "layout"
];
