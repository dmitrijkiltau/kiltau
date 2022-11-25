import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          twitterUsername
          mainMenu {
            path
            name
          }
          footerMenu {
            path
            name
          }
          social {
            twitter {
              title
              name
              url
            }
            instagram {
              title
              name
              url
            }
            facebook {
              title
              name
              url
            }
            quora {
              title
              name
              url
            }
            github {
              title
              name
              url
            }
            linkedin {
              title
              name
              url
            }
            xing {
              title
              name
              url
            }
            paypal {
              title
              name
              url
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}