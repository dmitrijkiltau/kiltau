import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import { Row, Column } from '../components/components'

const MinigamesPage = ({ location }) => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Minigames')} slug={location.pathname}>
      <Row>
        <Column lg={3}>3</Column>
        <Column lg={3}>3</Column>
        <Column lg={3}>3</Column>
        <Column lg={3}>3</Column>
      </Row>
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

export default MinigamesPage
