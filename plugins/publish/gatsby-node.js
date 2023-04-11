const { resolve } = require("path");

const postTemplate = resolve(__dirname, `../../src/templates/post-mdx.jsx`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
      allPostMdx {
        nodes {
          id
          post {
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

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
        return;
    }

    const posts = result.data.allPostMdx.nodes;

    await Promise.all(posts.map(
        async ({
            id,
            mdx: { internal: { contentFilePath } },
            post: { slug } }) => {
                await createPage({
                    path: slug,
                    component: `${postTemplate}?__contentFilePath=${contentFilePath}`,
                    context: { id }
                })
            }
    ));
};
