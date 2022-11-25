import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Seo } from '../components/seo'
import { Layout } from '../components/layout'
import { Hero } from '../elements/hero'

const NotFoundPage = () => {
  const { t } = useTranslation()
  
  return (
    <Layout>
      <Hero>
        <h1>{t('error404.title')}</h1>
        <h4>{t('error404.description')}</h4>
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default NotFoundPage

export const Head = () => <Seo title="ERROR 404: Not Found" />
