import RemarkGfm from 'remark-gfm';
import RehypeSlug from 'rehype-slug';
import { mkResolve } from '../utils/resolve.js';

const resolve = mkResolve(import.meta);

const feed = {
    query: `
{
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
`,
    feeds: [
        {
            serialize: ({ query: { site, allLink } }) => {
                const siteUrl = site.siteMetadata.siteUrl;
                return allLink.nodes.map(node => {
                    const { metadata } = node.post;
                    return {
                        ...metadata,
                        url: siteUrl + metadata.slug,
                        guid: siteUrl + metadata.slug,
                        custom_elements: []
                    };
                });
            },
            query: `
              {
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
              }
            `,
            output: "/feed.xml",
            title: "Words to Kick Your Teeth Out"
        }
    ]
};

const config = {
    siteMetadata: {
        title: "Words to Kick Your Teeth Out",
        description: "lol lmao",
        siteUrl: "https://mstewartgallus.github.io"
    },
    graphqlTypegen: true,
    flags: {
        DEV_SSR: true
    },
    plugins: [
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
                path: resolve('../../blog/prose'),
                name: 'Prose'
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: resolve('../../blog/poem'),
                name: 'Poem'
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: resolve('../../blog/web'),
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
        "publish-post-poem"
    ]
};

export default config;
