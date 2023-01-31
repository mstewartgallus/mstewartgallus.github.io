import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const poemTemplate = resolve('../../src/templates/post.jsx');

const usePostPoemList = async ({graphql, reporter}) => {
    const { errors, data } = await graphql(`
query PoemPosts {
   allPostPoem {
      nodes {
          id
          metadata {
            slug
          }
        }
      }
    }
`);
    if (errors) {
        reporter.panicOnBuild('Error loading Poem posts', errors);
        return;
    }
    return data.allPostPoem.nodes;
};

export const createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;

    const posts = await usePostPoemList({ graphql, reporter });
    if (!posts) {
        return;
    }
    await Promise.all(posts.map(async post => {
        const {
            id,
            metadata: { slug }
        } = post;
        return await createPage({
            path: slug,
            component: `${poemTemplate}`,
            context: { id }
        });
    }));
};
