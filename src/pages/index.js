import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({location}) => {
  return (
    <Layout slug={location.pathname} pageTitle="Startseite">
    </Layout>
  )
}

export default IndexPage
