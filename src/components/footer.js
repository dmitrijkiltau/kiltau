import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { Trans } from 'react-i18next'
import styled from 'styled-components'
import IconCopyright from '../icons/copyright.svg'
import IconCaretRight from '../icons/caret-right.svg'

const StyledCopyright = styled.div`
  grid-area: copyright;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  box-shadow: 0 -2px 0 var(--color-secondary-96);
`

export const Copyright = () => {
  const { language, languages, originalPath } = useI18next()

  return (
    <StyledCopyright>
      <p>
        <IconCopyright /> 2021 Dmitrij <Link to="/">Kiltau</Link>.{' '}
        <Trans>All rights reserved</Trans>
      </p>

      <p>
        {languages.map((lng) => {
          return lng !== language ? (
            <Link to={originalPath} language={lng} key={lng}>
              {lng}
            </Link>
          ) : (
            ''
          )
        })}
      </p>
    </StyledCopyright>
  )
}

const StyledPlayStore = styled.div`
  grid-area: play-store;
  box-shadow: 0 -2px 0 var(--color-secondary-96);

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
  }
`

export const PlayStore = () => {
  return (
    <StyledPlayStore>
      <p>
        <a
          href="https://play.google.com/store/apps/dev?id=4827793113950227625"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Google Play Store
          <IconCaretRight />
        </a>
      </p>
    </StyledPlayStore>
  )
}

const StyledPayPal = styled(StyledPlayStore)`
  grid-area: paypal;
`

export const PayPal = () => {
  return (
    <StyledPayPal>
      <p>
        <a
          href="https://paypal.me/kiltau"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <Trans>Buy me a coffee</Trans>
          <IconCaretRight />
        </a>
      </p>
    </StyledPayPal>
  )
}
