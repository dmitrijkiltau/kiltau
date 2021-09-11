import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import IconCopyright from '../icons/copyright.svg'
import IconCaretRight from '../icons/caret-right.svg'

const StyledCopyright = styled.div`
  grid-area: copyright;
  box-shadow: 0 -2px 0 var(--color-secondary-96);
`

export const Copyright = () => {
  return (
    <StyledCopyright>
      <p>
        <IconCopyright /> 2021 Dmitrij <Link to="/">Kiltau</Link>. Alle Rechte
        vorbehalten
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

    svg {
      height: 1.5rem;
    }
  }
`

export const PlayStore = () => {
  return (
    <StyledPlayStore>
      <p>
        <a href="https://play.google.com/store/apps/dev?id=4827793113950227625" target="_blank" rel="nofollow">
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
        <a href="https://paypal.me/kiltau" target="_blank" rel="nofollow">
          Spendiere mir einen Kaffee
          <IconCaretRight />
        </a>
      </p>
    </StyledPayPal>
  )
}
