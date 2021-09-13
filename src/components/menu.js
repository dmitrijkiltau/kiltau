import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'

const StyledMenu = styled.nav`
  grid-area: menu;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  width: calc(100% / 4);
  margin: 0 2rem;
  padding-bottom: 1rem;
  font-size: 1.5em;
  color: var(--color-secondary-80);
  box-shadow: 0 2px var(--color-secondary-50);

  @media (max-width: 61rem) {
    margin: 0 1rem;
    font-size: 1.25em;
  }

  @media (max-width: 61rem) {
    font-size: 1em;
  }

  &:hover,
  &:focus,
  &.active {
    color: var(--color-accent-96);
    box-shadow: 0 2px var(--color-accent-75);
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Menu = ({ slug }) => {
  const { menuItems } = useSiteMetadata()
  const { language } = useI18next()

  return (
    <StyledMenu>
      {menuItems.map((item) => {
        const prefix = language !== 'en' ? `/${language}` : ''
        const path = `${prefix}/${item.slug}`

        return (
        <StyledLink
          to={path}
          className={path.replace(/\//gi, '') === slug.replace(/\//gi, '') ? 'active' : null}
          key={item.slug}
        >
          <Trans>{item.name}</Trans>
        </StyledLink>
      )})}
    </StyledMenu>
  )
}

export default Menu
