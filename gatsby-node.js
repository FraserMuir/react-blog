const path = require("path");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogTemplatePath = path.resolve("./src/templates/BlogPost.js");

  const { data } = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  const posts = data.allContentfulBlogPost.edges;
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: blogTemplatePath,
      context: {
        slug: post.node.slug,
      },
    });
  });
};
