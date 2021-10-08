const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

const PostTemplate = path.resolve('./src/templates/BlogPost/BlogPost.tsx');
const BlogListTemplate = path.resolve(
  './src/templates/BlogList/BlogListTemplate.tsx'
);

// Called whenever a new node is created, i.e. a blog post
//  Was used to listen for node creation locally
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({ node, getNode, basePath: 'posts' });
// Create a slug field on each node(post)
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     });
//   }
// };

// Programatically create pages based on nodes
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulBlogPost(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  // Create a page for each markdown file in posts
  const posts = result.data.allContentfulBlogPost.edges;
  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts${post.slug}`,
      component: PostTemplate,
      context: {
        slug: post.slug
      }
    });
  });

  // How many posts are returned per page
  const postsPerPage = 4;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, index) => {
    const currentPage = index + 1;
    const isFirstPage = index === 0;
    const isLastPage = currentPage === totalPages;

    createPage({
      path: isFirstPage ? 'blog' : `blog/${currentPage}`,
      component: BlogListTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        isFirstPage,
        isLastPage,
        currentPage,
        totalPages
      }
    });
  });
};
