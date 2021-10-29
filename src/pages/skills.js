import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import Row from '../components/row'
import Column from '../components/column'

const design_video = [
  'Adobe XD',
  'Adobe Photoshop',
  'Adobe Premiere',
  'DaVinci Resolve Studio',
]

const web_development = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Gatsby.js',
  'PHP',
  'WordPress',
  'MySQL',
  'JSON',
]

const app_development = ['Flutter', 'Dart', 'Kotlin', 'Java']

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

const SkillsPage = ({ location }) => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Skills')} slug={location.pathname}>
      <Row>
        <Column lg={3} md={4} sm={6}>
          <h2>Design & Video</h2>
          <List>
            {design_video.map((item, index) => (
              <li key={'design_video-' + index}>{item}</li>
            ))}
          </List>
        </Column>

        <Column lg={3} md={4} sm={6}>
          <h2>
            <Trans>Web development</Trans>
          </h2>
          <List>
            {web_development.map((item, index) => (
              <li key={'web_development-' + index}>{item}</li>
            ))}
          </List>
        </Column>

        <Column lg={3} md={4} sm={6}>
          <h2>
            <Trans>App development</Trans>
          </h2>
          <List>
            {app_development.map((item, index) => (
              <li key={'app_development-' + index}>{item}</li>
            ))}
          </List>
        </Column>

        <Column lg={3} md={12} sm={6}>
          <h2>Social</h2>
          <p>ERROR 404 social skills not found</p>
        </Column>
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

export default SkillsPage
