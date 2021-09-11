import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation, Trans } from 'react-i18next'
import Layout from '../components/layout'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('ERROR 404: Page not found')}>
      <p>
        <Trans>ERROR 404: Page not found</Trans>
      </p>
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
