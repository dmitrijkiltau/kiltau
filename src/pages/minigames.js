import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

const MinigamesPage = ({ location }) => {
  const { t } = useTranslation()

  return <Layout pageTitle={t('Minigames')} slug={location.pathname}></Layout>
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

export default MinigamesPage
