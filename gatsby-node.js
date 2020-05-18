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
      site {
        siteMetadata {
          blogUrl
        }
      }
    }
  `);

  const { edges } = data.allContentfulBlogPost;
  const { blogUrl } = data.site.siteMetadata;

  edges.forEach((post) => {
    createPage({
      path: `${blogUrl}/${post.node.slug}/`,
      component: blogTemplatePath,
      context: {
        slug: post.node.slug,
      },
    });
  });
};
