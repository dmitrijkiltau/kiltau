import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              twitter {
                page
                name
              }
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
