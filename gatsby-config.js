module.exports = {
  siteMetadata: {
    title: 'Kiltau',
    description: '',
    author: 'Dmitrij Kiltau',
    siteURL: 'https://kiltau.com',
    menuItems: [
      {
        name: 'Startseite',
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
        name: 'Minispiele',
        slug: 'minispiele',
      },
    ],
    social: {
      twitter: {
        page: 'Twitter',
        name: 'einfachdima',
        url: 'https://twitter.com/'
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
}
