import * as React from 'react'
import { graphql } from 'gatsby'
import { Seo } from '../components/seo'
import { Layout } from '../components/layout'
import { About } from '../sections/about'
import { Tools } from '../sections/tools'
import { Skills } from '../sections/skills'

const IndexPage = () => {
  return <Layout title="Homepage">
    <div id="preloader"></div>
    <About />
    <Tools />
    <Skills />
  </Layout>
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

export default IndexPage

export const Head = () => <Seo />
