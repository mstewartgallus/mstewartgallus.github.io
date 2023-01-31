import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.js";

const resolve = mkResolve(import.meta);

const mdxTemplate = resolve('../../src/templates/post.jsx');

const usePostMdxList = async ({graphql, reporter}) => {
    const { errors, data } = await graphql(`
query MdxPosts {
  allPostMdx {
    nodes {
      id
      metadata {
        slug
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

export const createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;

    const posts = await usePostMdxList({ graphql, reporter });
    if (!posts) {
        return;
    }
    await Promise.all(posts.map(async post => {
        const {
            id,
            metadata: { slug },
            mdx: { internal: { contentFilePath } }
        } = post;
        await createPage({
            path: slug,
            component: `${mdxTemplate}?__contentFilePath=${contentFilePath}`,
            context: { id }
        });
    }));
};
