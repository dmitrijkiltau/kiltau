module.exports = {
  siteMetadata: {
    title: 'Kiltau',
    description: "I'm a developer and this is my website.",
    author: 'Dmitrij Kiltau',
    siteUrl: 'https://kiltau.com',
    menuItems: [
      {
        name: 'Homepage',
        slug: '',
      },
      {
        name: 'Skills',
        slug: 'skills',
      },
      {
        name: 'Tools',
        slug: 'tools',
      },
      {
        name: 'Minigames',
        slug: 'minigames',
      },
    ],
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-43582589-10',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Work Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i',
        ],
        display: 'swap',
      },
    },
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
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: './src/locales/',
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
