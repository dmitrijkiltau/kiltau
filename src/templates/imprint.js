import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Seo } from '../components/seo'
import { Layout } from '../components/layout'
import { Hero } from '../elements/hero'
import { Section } from '../elements/section'

const Imprint = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Hero path="#imprint">
        <h1>{t('imprint.title')}</h1>
      </Hero>

      <Section id="imprint">
        <div>
          <h3 className="mb-4">Angaben gemäß § 5 TMG</h3>

          <p>
            Dmitrij Kiltau
            <br />
            Sachsen-Anhalt
            <br />
            Deutschland
          </p>
        </div>

        <div>
          <h3 className="mb-4">Kontakt</h3>

          <p>
            E-Mail: <a href="mailto:info@kiltau.com">info@kiltau.com</a>
          </p>
        </div>
      </Section>
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

export default Imprint

export const Head = () => <Seo title="Imprint" />