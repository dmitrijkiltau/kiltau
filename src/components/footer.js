import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { Trans } from 'react-i18next'
import styled from 'styled-components'

import { IconCopyright, IconCaretRight } from '../components/icons'

const Text = styled.p`
  margin: 1rem 0;

  &:last-child {
    margin: 1rem 0;
  }

  @media (max-width: 61rem) {
    font-size: 1rem;

    a {
      font-size: 1rem;
    }
  }
`

const StyledCopyright = styled.div`
  grid-area: copyright;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  box-shadow: 0 -2px 0 var(--color-primary-96);
  gap: 2rem;
`

const Copyright = () => {
  const { language, languages, originalPath } = useI18next()

  return (
    <StyledCopyright>
      <Text>
        <IconCopyright /> {new Date().getFullYear()} Dmitrij{' '}
        <Link to="/">Kiltau</Link>. <Trans>All rights reserved</Trans>
      </Text>

      <Text>
        {languages.map((lng) => {
          return (
            lng !== language && (
              <Link to={originalPath} language={lng} key={lng}>
                {lng}
              </Link>
            )
          )
        })}
      </Text>
    </StyledCopyright>
  )
}

const StyledPlayStore = styled.div`
  grid-area: play-store;
  box-shadow: 0 -2px 0 var(--color-primary-96);

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
  }
`

const PlayStore = () => {
  return (
    <StyledPlayStore>
      <Text>
        <a
          href="https://play.google.com/store/apps/dev?id=4827793113950227625"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Google Play Store
          <IconCaretRight />
        </a>
      </Text>
    </StyledPlayStore>
  )
}

const StyledPayPal = styled(StyledPlayStore)`
  grid-area: paypal;
`

const PayPal = () => {
  return (
    <StyledPayPal>
      <Text>
        <a
          href="https://paypal.me/kiltau"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <Trans>Buy me a coffee</Trans>
          <IconCaretRight />
        </a>
      </Text>
    </StyledPayPal>
  )
}

const StyledFooter = styled.div`
  grid-area: footer;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'copyright play-store paypal';
  gap: 2rem;

  @media (max-width: 61rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'copyright copyright' 'play-store paypal';
  }

  @media (max-width: 36rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'copyright' 'play-store' 'paypal';
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright />
      <PlayStore />
      <PayPal />
    </StyledFooter>
  )
}

export default Footer
