require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.kcgreen.dev',
    title: 'kcgreen.dev',
    author: 'KC Green',
    description:
      'My Own Developer Blog/Portfolio Website Built With Gatsby JS. ',
    publishedYear: 2022
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images'
          },
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: 'carbon',
              theme: 'one-light'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `kcgreen-dev`
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        icon: 'src/images/favicon.ico'
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-anchor-links'
  ]
};
