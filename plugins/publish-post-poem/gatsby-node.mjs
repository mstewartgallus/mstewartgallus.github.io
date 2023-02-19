import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const poemTemplate = resolve('../../src/templates/post-poem.jsx');

const usePostPoemList = async ({graphql, reporter}) => {
    const { errors, data } = await graphql(`
query PoemPosts {
   allPostPoem {
      nodes {
        id
        post {
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
    await Promise.all(posts.map(async postPoem => {
        const { id, post: { slug } } = postPoem;
        return await createPage({
            path: slug,
            component: poemTemplate,
            context: { id }
        });
    }));
};
