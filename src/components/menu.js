import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'

import {
  IconHome,
  IconCode,
  IconToolbox,
  IconGamepad,
} from '../components/icons'

const menuItems = [
  {
    name: 'Homepage',
    slug: '',
    icon: <IconHome />,
  },
  {
    name: 'Skills',
    slug: 'skills',
    icon: <IconCode />,
  },
  {
    name: 'Tools',
    slug: 'tools',
    icon: <IconToolbox />,
  },
  {
    name: 'Minigames',
    slug: 'minigames',
    icon: <IconGamepad />,
  },
]

const StyledMenu = styled.nav`
  grid-area: menu;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

const StyledLink = styled(Link)`
  width: calc(100% / 4);
  padding-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--color-primary-80);
  box-shadow: 0 2px var(--color-primary-50);

  @media (max-width: 61rem) {
    font-size: 1.25rem;
    text-align: center;

    span {
      display: none;
    }
  }

  &:hover,
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
  const { language } = useI18next()

  return (
    <StyledMenu>
      {menuItems.map((item) => {
        const prefix = language !== 'en' ? `/${language}` : ''
        const path = `${prefix}/${item.slug}`

        return (
          <StyledLink
            to={path}
            className={
              path?.replace(/\//gi, '') === slug?.replace(/\//gi, '')
                ? 'active'
                : null
            }
            key={item.slug}
          >
            {item.icon}
            <span>
              {' '}
              <Trans>{item.name}</Trans>
            </span>
          </StyledLink>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
