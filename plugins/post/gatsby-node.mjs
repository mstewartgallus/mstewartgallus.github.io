import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const mdxTemplate = resolve('../../src/templates/post.jsx');
const poemTemplate = resolve('../../src/templates/post.jsx');

const usePostMdxList = async ({graphql, reporter}) => {
    const { errors, data } = await graphql(`
query MdxPosts {
  allPostMdx {
    nodes {
      id
      post {
        id
        metadata {
          slug
        }
      }
      mdx {
        internal {
          contentFilePath
        }
      }
    }
  }
}
`);
    if (errors) {
        reporter.panicOnBuild('Error loading Mdx posts', errors);
        return;
    }
    return data.allPostMdx.nodes;
};

const usePostPoemList = async ({graphql, reporter}) => {
    const { errors, data } = await graphql(`
query PoemPosts {
   allPostPoem {
      nodes {
          id
          post {
            id
            metadata {
              slug
            }
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

const createMdxPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;

    const posts = await usePostMdxList({ graphql, reporter });
    if (!posts) {
        return;
    }
    await Promise.all(posts.map(async post => {
        const {
            id,
            post: { id: postId, metadata: { slug } },
            mdx: { internal: { contentFilePath } }
        } = post;
        await createPage({
            path: slug,
            component: `${mdxTemplate}?__contentFilePath=${contentFilePath}`,
            context: { id  }
        });
    }));
};

const createPoemPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;

    const posts = await usePostPoemList({ graphql, reporter });
    if (!posts) {
        return;
    }
    await Promise.all(posts.map(async post => {
        const {
            id,
            post: { id: postId, metadata: { slug } }
        } = post;
        return await createPage({
            path: slug,
            component: `${poemTemplate}`,
            context: { id }
        });
    }));
};

export const createPages = async props => {
    await Promise.all([createMdxPages(props),
                       createPoemPages(props)]);
};
