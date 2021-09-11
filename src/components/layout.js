import * as React from 'react'
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
  background-color: var(--color-primary);
`

const Grid = styled.div`
  width: 112rem;
  height: 67.5vw;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows:
    calc(11.0625vw - 2rem) calc(10.25vw - 2rem) calc(35.375vw - 2rem)
    calc(11vw - 2rem);
  grid-template-areas:
    'header header header header'
    'menu menu menu menu'
    'main main main main'
    'copyright copyright play-store paypal';
  grid-gap: 0 4vw;
  margin: 0 4rem;

  @media (min-width: 120rem) {
    max-height: 67.5rem;
    grid-template-rows: 11.0625rem 10.25rem 35.375rem 11rem;
    grid-gap: 0 4rem;
  }
`

const StyledMain = styled.main`
  grid-area: main;
`

const Layout = ({ pageTitle, slug, image, children }) => {
  const { t } = useTranslation()
  const { title, description, author, siteURL, social } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <title>{`${title} | ${pageTitle}`}</title>
        <meta name="description" content={t("I'm a developer and this is my website.")} />
        <meta name="author" content={author} />
        <meta name="copyright" content={author} />

        <link rel="canonical" href={`${siteURL}${slug}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={social.twitter.name} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <GlobalStyle />

      <Wrapper>
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
