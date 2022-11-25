module.exports = {
  siteMetadata: {
    title: 'Kiltau',
    description: 'I\'m a frontend developer and this is my website.',
    author: 'Dmitrij Kiltau',
    siteUrl: 'https://kiltau.com',
    twitterUsername: 'einfachdima',
    mainMenu: [
      { path: '/#hero', name: 'about' },
      { path: '/#tools', name: 'tools' },
      { path: '/#skills', name: 'skills' },
    ],
    footerMenu: [
      { path: '/imprint', name: 'imprint' },
      { path: '/privacy', name: 'privacy' }
    ],
    social: {
      twitter: {
        title: 'Twitter',
        name: 'einfachdima',
        url: 'https://twitter.com/',
      },
      instagram: {
        title: 'Instagram',
        name: 'einfach.dima',
        url: 'https://instagram.com/',
      },
      facebook: {
        title: 'Facebook',
        name: 'dmitrijkiltau',
        url: 'https://facebook.com/',
      },
      quora: {
        title: 'Quora',
        name: 'Dmitrij-Kiltau',
        url: 'https://de.quora.com/profile/',
      },
      github: {
        title: 'Github',
        name: 'dmitrijkiltau',
        url: 'https://github.com/',
      },
      linkedin: {
        title: 'LinkedIn',
        name: 'dmitrij-kiltau-70bb4b1bb',
        url: 'https://www.linkedin.com/in/',
      },
      xing: {
        title: 'Xing',
        name: 'Dmitrij_Kiltau',
        url: 'https://www.xing.com/profile/',
      },
      paypal: {
        title: 'PayPal',
        name: 'kiltau',
        url: 'https://paypal.me/'
      }
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    /*{
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        'trackingId': 'UA-43582589-10'
      }
    },*/
    'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: './src/locales'
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        siteUrl: 'https://kiltau.com',
        i18nextOptions: {
          fallbackLng: 'en',
          supportedLngs: ['en', 'de'],
          interpolation: {
            escapeValue: false,
          }
        },
      },
    }
  ]
};