module.exports = {
  siteMetadata: {
    title: 'Kiltau',
    description: "I'm a developer and this is my website.",
    author: 'Dmitrij Kiltau',
    siteUrl: 'https://kiltau.com',
    social: {
      twitter: {
        page: 'Twitter',
        name: 'einfachdima',
        url: 'https://twitter.com/',
      },
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    /* {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-43582589-10',
      },
    }, */
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: './src/locales/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: './src/fonts/',
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        siteUrl: 'https://kiltau.com/',
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
}
