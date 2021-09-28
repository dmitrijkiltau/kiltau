import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation, Trans } from 'react-i18next'

import Layout from '../components/layout'
import Accordion from '../components/accordion'
import Row from '../components/row'
import Column from '../components/column'

import RandomNumber from '../components/tools/random-number'
import PercentageValue from '../components/tools/percentage-value'
import Percentage from '../components/tools/percentage'
import BaseValue from '../components/tools/base-value'
import PercentageChange from '../components/tools/percentage-change'
import BaseValueChange from '../components/tools/base-value-change'

const allTools = [
  {
    title: 'General',
    tools: [
      {
        name: 'Random number',
        tool: <RandomNumber />,
      },
      {
        name: 'Password',
        tool: '',
      },
      {
        name: 'Date',
        tool: '',
      },
      {
        name: 'Aspect ratio',
        tool: '',
      },
    ],
  },
  {
    title: 'Percentage calculation',
    tools: [
      {
        name: 'Percentage value',
        tool: <PercentageValue />,
      },
      {
        name: 'Percentage',
        tool: <Percentage />,
      },
      {
        name: 'Base value',
        tool: <BaseValue />,
      },
      {
        name: 'Percentage change',
        tool: <PercentageChange />,
      },
      {
        name: 'Base value change',
        tool: <BaseValueChange />,
      },
    ],
  },
]

const ToolsPage = ({ location }) => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Tools')} slug={location.pathname}>
      <Row>
        {allTools.map((category, index) => (
          <Column lg={4} md={3} sm={2} key={'category-' + index}>
            <h2><Trans>{category.title}</Trans></h2>
            {category.tools.map((tool, toolIndex) => (
                <Accordion title={t(tool.name)} key={'tool-accordion-' + toolIndex}>
                  {tool.tool}
                </Accordion>
              ))}
          </Column>
        ))}
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

export default ToolsPage
