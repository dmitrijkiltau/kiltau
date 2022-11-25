import React, { useEffect, useState } from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Section } from "../elements/section"

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Tailwind', 'React.js', 'Gatsby.js', 'PHP',
  'NEOS', 'WordPress', 'MySQL', 'JSON', 'Flutter', 'Dart', 'Kotlin', 'Java',
  'XD', 'Photoshop', 'Premiere', 'DaVinci'
]

export const Skills = () => {
  const { t } = useTranslation()
  const [lineBreaks, setLineBreaks] = useState([3, 8, 14]);

  useEffect(() => {
    const onResize = () => {
      let breaks = [3, 8, 14];

      if (window.innerWidth < 768) breaks = [2, 6, 10];
      if (window.innerWidth < 429) breaks = [];

      return setLineBreaks(breaks)
    }

    onResize()

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <Section id="skills">
      <h2>{t('skills.title')}</h2>

      <p className="description">{t('skills.description')}</p>

      <div className="cloud">
        {skills.map((skill, index) => ([
          <span key={`skill-${index}`}>{skill}</span>,
          lineBreaks.includes(index) && <br key={`br-${index}`} />
        ]))}
      </div>
    </Section>
  )
}