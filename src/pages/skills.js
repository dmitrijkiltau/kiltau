import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

const SkillsPage = ({ location }) => {
  const { t } = useTranslation()
  
  return <Layout pageTitle={t('Skills')} slug={location.pathname}></Layout>
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

export default SkillsPage
