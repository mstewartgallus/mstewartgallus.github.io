import { promises as fs } from "fs";
import * as url from 'url';
import * as path from 'path';
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const mdxTemplate = resolve('../../src/templates/post-mdx.jsx');

const usePostMdxList = async ({graphql, reporter}) => {
    const { errors, data } = await graphql(`
query MdxPosts {
  allPostMdx {
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
        reporter.panicOnBuild('Error loading MDX posts', errors);
        return;
    }
    return data.allPostMdx.nodes;
};

export const createPages = async ({actions, graphql, reporter, getNode}) => {
    const { createPage } = actions;

    const posts = await usePostMdxList({ graphql, reporter });
    if (!posts) {
        return;
    }
    await Promise.all(posts.map(async post => {
        const {
            id,
            post: { slug }
        } = post;
        await createPage({
            path: slug,
            component: mdxTemplate,
            context: { id }
        });
    }));
};
