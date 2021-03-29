const config = require('./src/data/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            variable: true,
            weights: ['400,800'],
          },
          {
            family: 'Roboto Slab',
            variable: true,
            weights: ['400,800'],
          },
          {
            family: 'Lato',
            variable: true,
            weights: ['400..900'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: {
          className: 'modalClass',
          ariaHideApp: false,
          // shouldCloseOnOverlayClick: false,
          // shouldCloseOnEsc: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/favicon-512.png',
        injectHTML: true,
      },
    },
  ],
};
