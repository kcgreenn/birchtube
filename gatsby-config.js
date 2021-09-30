module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.kcgreen.dev',
    title: 'kcgreen.dev'
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Roboto',
                variants: ['300', '400', '500', '700']
              }
            ]
          }
        }
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-anchor-links'
  ]
};
