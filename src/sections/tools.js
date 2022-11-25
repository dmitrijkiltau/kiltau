import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Section } from "../elements/section"
import { RandomNumber } from "./tools/random-number"
import { AspectRatio } from "./tools/aspect-ratio"
import { Password } from "./tools/password"
import { Percentage } from "./tools/percentage"

export const Tools = () => {
  const { t } = useTranslation()

  return <Section id="tools">
    <h2>{t('tools.title')}</h2>

    <p className="description">{t('tools.description')}</p>

    <div className="container">
      <RandomNumber />
      <AspectRatio />
      <Password />
      <Percentage />
    </div>
  </Section>
}