import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useI18next } from 'gatsby-plugin-react-i18next'
import useSiteMetadata from '../hooks/use-site-metadata'
import { Helmet } from 'react-helmet'

import GlobalStyle from './global-style'
import Header from './header'
import Menu from './menu'
import Footer from './footer'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  &.scrollable {
    height: auto;
    align-items: flex-start;
  }
`

const Grid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto minmax(36rem, auto) auto;
  grid-template-areas:
    'header'
    'menu'
    'main'
    'footer';
  gap: 2rem;
  margin: 0 4rem 2rem 4rem;

  @media (min-width: 120rem) {
    width: 120rem;
    height: 67.5rem;

    &.scrollable {
      height: auto;
    }
  }
`

const StyledMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Layout = ({ pageTitle, slug, image, children }) => {
  const { t } = useTranslation()
  const { language } = useI18next()
  const { title, description, author, siteUrl, social } = useSiteMetadata()

  const wrapperRef = useRef()
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrollable(wrapperRef.current?.scrollHeight > window.innerHeight)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setIsScrollable])

  return (
    <>
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{title + ' | ' + pageTitle}</title>
        <meta
          name="description"
          content={t("I'm a developer and this is my website.")}
        />
        <meta name="author" content={author} />
        <meta name="copyright" content={author} />

        <link rel="canonical" href={siteUrl + slug} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={social.twitter.name} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <GlobalStyle />

      <Wrapper ref={wrapperRef} className={isScrollable ? 'scrollable' : ''}>
        <Grid className={isScrollable ? 'scrollable' : ''}>
          <Header language={language} />

          <Menu slug={slug} />

          <StyledMain>{children}</StyledMain>

          <Footer />
        </Grid>
      </Wrapper>
    </>
  )
}

export default Layout
