import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'

const StyledMenu = styled.nav`
  grid-area: menu;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  width: calc(100% / 4 - 2rem);
  margin: 0 2vw;
  padding-bottom: 1vw;
  font-size: 1.5em;
  color: var(--color-secondary-80);
  box-shadow: 0 2px var(--color-secondary-50);

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

  return (
    <StyledMenu>
      {menuItems.map((item) => (
        <StyledLink
          to={`/${item.slug}`}
          className={`/${item.slug}` === slug ? 'active' : null}
          key={item.slug}
        >
          {item.name}
        </StyledLink>
      ))}
    </StyledMenu>
  )
}

export default Menu
