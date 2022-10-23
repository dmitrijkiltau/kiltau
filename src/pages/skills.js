import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import { Row, Column } from '../components/components'

const columns = [
  {
    name: 'design_video',
    title: 'Design & Video',
    children: ['Adobe XD', 'Adobe Photoshop', 'Adobe Premiere', 'DaVinci Resolve Studio']
  },
  {
    name: 'web_development',
    title: 'Web development',
    children: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Gatsby.js', 'Tailwind CSS', 'PHP', 'NEOS CMS', 'WordPress', 'MySQL', 'JSON']
  },
  {
    name: 'app_development',
    title: 'App development',
    children: ['Flutter', 'Dart', 'Kotlin', 'Java']
  }
]

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

const SkillsPage = ({ location }) => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Skills')} slug={location.pathname}>
      <Row>
        {columns.map((col, i) => <Column lg={3} md={4} sm={6} key={col.name + '-' + i}>
          <h2>
            <Trans>{col.title}</Trans>
          </h2>

          <List>
            {col.children.map((child, j) => <li key={col.name + '-' + i + '-' + j}>{child}</li>)}
          </List>
        </Column>)}

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
