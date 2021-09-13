import React from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

const StyledHeader = styled.header`
  min-height: 8em;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 0 var(--color-secondary-50);
`

const StyledLogo = styled.h1`
  margin: 0;
  font-size: 3em;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-secondary-96);

  @media (max-width: 61rem) {
    font-size: 2.25em;
  }

  @media (max-width: 36rem) {
    font-size: 1.5em;
  }
`

const StyledSubtitle = styled.p`
  margin: 0;
  font-size: 1.5em;
  text-align: end;
  color: var(--color-secondary-80);

  @media (max-width: 61rem) {
    font-size: 1.25em;
  }

  @media (max-width: 36rem) {
    font-size: 1em;
  }
`

const Header = () => (
  <StyledHeader>
    <StyledLogo>Kiltau</StyledLogo>

    <StyledSubtitle>
      <Trans>IT specialist for application development</Trans>
    </StyledSubtitle>
  </StyledHeader>
)

export default Header
