import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import useSiteMetadata from '../hooks/use-site-metadata'
import { Helmet } from 'react-helmet'
import GlobalStyle from './global-style'
import Header from './header'
import Menu from './menu'
import { Copyright, PlayStore, PayPal } from './footer'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &.scrollable {
    width: 100%;
    height: auto;
    align-items: flex-start;
  }
`

const Grid = styled.div`
  width: calc(100% - 8rem);
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto minmax(36rem, auto) auto;
  grid-template-areas:
    'header header header header'
    'menu menu menu menu'
    'main main main main'
    'copyright copyright play-store paypal';
  gap: 2rem;
  margin: 0 4rem 2rem 4rem;

  @media (min-width: 120rem) {
    width: 120rem;
    height: 67.5rem;
  }

  @media (max-width: 81rem) {
    grid-template-rows: auto auto minmax(24rem, auto) auto;
  }

  @media (max-width: 61rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto minmax(18rem, auto) auto auto;
    grid-template-areas:
      'header header'
      'menu menu'
      'main main'
      'play-store paypal'
      'copyright copyright';
  }

  @media (max-width: 36rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto minmax(12rem, auto) auto auto auto;
    grid-template-areas:
      'header'
      'menu'
      'main'
      'play-store'
      'paypal'
      'copyright';
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
  const { title, description, author, siteUrl, social } = useSiteMetadata()

  const wrapperRef = useRef()
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsScrollable(wrapperRef.current?.scrollHeight > window.innerHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return (_) => window.removeEventListener('resize', handleResize)
  }, [wrapperRef])

  return (
    <>
      <Helmet>
        <title>{`${title} | ${pageTitle}`}</title>
        <meta
          name="description"
          content={t("I'm a developer and this is my website.")}
        />
        <meta name="author" content={author} />
        <meta name="copyright" content={author} />

        <link rel="canonical" href={`${siteUrl}${slug}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={social.twitter.name} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <GlobalStyle />

      <Wrapper ref={wrapperRef} className={isScrollable ? 'scrollable' : ''}>
        <Grid>
          <Header />

          <Menu slug={slug} />

          <StyledMain>{children}</StyledMain>

          <Copyright />

          <PlayStore />

          <PayPal />
        </Grid>
      </Wrapper>
    </>
  )
}

export default Layout
