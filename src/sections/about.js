import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Hero } from "../elements/hero"

export const About = () => {
  const { t } = useTranslation()

  return <Hero className="about" path="#tools">
    <div>
      <h4 className="mr-4 md:mr-8 lg:mr-10">{t('about.prepend')}</h4>
    </div>

    <div>
      <h1>{t('about.name')}</h1>
    </div>

    <div>
      <h4>{t('about.append')}</h4>
    </div>
  </Hero>
}
