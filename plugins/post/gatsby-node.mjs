import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const mdxTemplate = resolve('../../src/templates/post.jsx');
const poemTemplate = resolve('../../src/templates/post.jsx');

const usePostList = async ({graphql, reporter}) => {
    const result = await graphql(`
query Posts {
   allPost {
      nodes {
          id
          metadata {
            slug
          }
          content {
            __typename
            ... on MdxContent {
               contentFilePath
            }
          }
        }
      }
    }
`);
    if (result.errors) {
        reporter.panicOnBuild('Error loading posts', result.errors);
        return;
    }
    return result.data.allPost.nodes;
};

export const createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const posts = await usePostList({ graphql, reporter });
    if (!posts) {
        return;
    }
    for (const post of posts) {
        const { id, metadata: { slug }, content } = post;
        switch (content.__typename) {
            case 'PoemContent':
                {
                    await createPage({
                        path: slug,
                        component: `${poemTemplate}`,
                        context: { id }
                    });
                    break;
                }

            case 'MdxContent':
                {
                    const contentFilePath = content.contentFilePath;
                    await createPage({
                        path: slug,
                        component: `${mdxTemplate}?__contentFilePath=${contentFilePath}`,
                        context: { id }
                    });
                    break;
                }
        }
    }
};
