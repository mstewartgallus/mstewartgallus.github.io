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
            serialize: ({ query: { site, allPost } }) => {
                const siteUrl = site.siteMetadata.siteUrl;
                return allPost.nodes.map(node => {
                    return Object.assign({}, node.metadata, {
                        url: siteUrl + node.metadata.slug,
                        guid: siteUrl + node.metadata.slug,
                        custom_elements: []
                    });
                });
            },
            query: `
              {
                allPost(sort: { date: DESC }) {
                  nodes {
                    metadata {
                      title
                      date
                      slug
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
        "render",
    ]
};

export default config;
