import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
  const { language } = useI18next()

  return <>
    <Helmet htmlAttributes={{ lang: language }} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
}