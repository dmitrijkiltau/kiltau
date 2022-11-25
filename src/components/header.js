import React, { useEffect } from 'react'
import { useTranslation, Link, useI18next } from 'gatsby-plugin-react-i18next'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const Header = () => {
  const { t } = useTranslation()
  const { language } = useI18next()
  const { title: defaultTitle, mainMenu } = useSiteMetadata()

  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return

    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0].target !== header) return;
      document.documentElement.style.setProperty('scroll-padding-top', `${header.clientHeight}px`)
    })

    resizeObserver.observe(header)
  }, [])

  return (
    <header>
      <div className="container">
        <div id="logo">
          <Link to="/">
            <h2 className="font-bold">{defaultTitle.toUpperCase()}</h2>
          </Link>
        </div>

        <nav>
          {mainMenu.map((item, index) => <Link key={`menu-${index}`} to={`/#${item}`}>{t(`menu.${item}`)}</Link>)}
        </nav>
      </div>
    </header>
  )
}