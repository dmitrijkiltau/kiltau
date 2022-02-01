import * as React from 'react'
import { graphql } from 'gatsby'
import { Trans, useTranslation } from 'react-i18next'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Row from '../components/row'
import Column from '../components/column'
import Tooltip from '../components/tooltip'

const social = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/einfachdima',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/einfach.dima',
  },
  {
    name: 'Github',
    url: 'https://github.com/dmitrijkiltau',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/dmitrijkiltau',
  },
  {
    name: 'Quora',
    url: 'https://de.quora.com/profile/Dmitrij-Kiltau',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dmitrij-kiltau-70bb4b1bb',
  },
  {
    name: 'Xing',
    url: 'https://www.xing.com/profile/Dmitrij_Kiltau',
  },
]

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 2.5rem;

  @media (min-width: 61rem) {
    font-size: 3rem;
  }
`

const Text = styled.p`
  width: 75%;
  margin: 0 0 1rem 0;
  font-size: 1.25rem;

  @media (max-width: 81rem) {
    width: auto;
  }
`

const Code = styled.code`
  width: 100%;
  display: flex;
  justify-content: start;
  font-size: 0.8rem;

  small {
    text-align: start;
  }
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

const IndexPage = ({ location, data }) => {
  const { t } = useTranslation()

  const age = Math.floor(
    (new Date() - new Date('1997-09-14').getTime()) / 3.15576e10
  )

  return (
    <Layout slug={location.pathname} pageTitle={t('Homepage')}>
      <Row fullHeight={true}>
        <Column lg={6} sm={12} justifyContent="flex-end">
          <Title>
            <Trans>About me</Trans>
          </Title>
          <Text>
            <Trans>Hey, I'm</Trans>{' '}
            <i>
              <s>Dmitrij Kiltau</s>
            </i>{' '}
            Dima <Trans>and</Trans>{' '}
            <Tooltip text={age}>
              <Code>
                <small>
                  Math.floor(
                  <span style={{ display: 'block', paddingLeft: '1rem' }}>
                    (new Date() - new Date('yyyy-mm-dd').getTime()) / 3.15576e10
                  </span>
                  )
                </small>
              </Code>
            </Tooltip>{' '}
            <Trans>
              years old. Professionally, I'm an IT specialist for application
              development and currently I work at MSCG GmbH.
            </Trans>
          </Text>
          <Text>
            <Trans>
              In my free time I like to try out new development tools or design
              & develop smaller websites, tools, minigames and apps.
            </Trans>
          </Text>
          <Text>
            <Trans>
              Apart from programming languages I speak German, English and
              Russian.
            </Trans>
          </Text>
        </Column>

        <Column lg={3} md={4} sm={6}>
          <h2>
            <Trans>Contact</Trans>
          </h2>
          <p>
            <Trans>You can reach me at e-mail:</Trans>{' '}
            <a href="mailto:info@kiltau.com">info@kiltau.com</a>
          </p>

          <h2>Social</h2>
          <List>
            {social.map((page, index) => (
              <li key={'social-' + index}>
                <a href={page.url} target="_blank" rel="noopener noreferrer">
                  {page.name}
                </a>
              </li>
            ))}
          </List>
        </Column>

        <Column lg={3} md={4} sm={6}>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt=""
          />
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
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

export default IndexPage
