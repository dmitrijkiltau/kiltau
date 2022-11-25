import React, { useState, useEffect } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import AnimatedNumber from '@plot-and-scatter/react-animated-number'
import { Accordion } from '../../elements/accordion'

export const RandomNumber = () => {
  const { t } = useTranslation()
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  const [result, setResult] = useState(0)

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const handleChangeResult = (e) => {
    e.preventDefault();

    const currentMin = min
    const currentMax = max

    if (currentMin > currentMax) {
      setMin(currentMax)
      setMax(currentMin)
    }

    let randomNumber = result

    while (randomNumber === result) {
      randomNumber = getRandomNumber(min, max)
    }

    setResult(randomNumber)
  }

  const handleChangeMin = ({ target: { value } }) => setMin(Math.ceil(value))
  const handleChangeMax = ({ target: { value } }) => setMax(Math.floor(value))

  useEffect(() => setResult(getRandomNumber(min, max)), [min, max, setResult])

  return (
    <Accordion
      id="random-number"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="icon">
          <path fill="currentColor" d="M64 64c0-17.7 14.3-32 32-32H336c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L226.3 208H248c75.1 0 136 60.9 136 136s-60.9 136-136 136H169.4c-42.4 0-81.2-24-100.2-61.9l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H248c39.8 0 72-32.2 72-72s-32.2-72-72-72H144c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L253.7 96H96C78.3 96 64 81.7 64 64z" />
        </svg>
      }
      title={t('tools.randomNumberGenerator.title')}
      description={t('tools.randomNumberGenerator.description')}
    >
      <form onChange={handleChangeResult} onSubmit={handleChangeResult}>
        <AnimatedNumber
          className="result"
          component="span"
          value={result || 0} duration={300}
          formatValue={(value) => Math.floor(value) || 0}
        />

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label htmlFor="random-number-min">{t('tools.randomNumberGenerator.min')}</label>
            <input
              type="number"
              id="random-number-min"
              value={min}
              onChange={handleChangeMin}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="random-number-max">{t('tools.randomNumberGenerator.max')}</label>
            <input
              type="number"
              id="random-number-max"
              value={max}
              onChange={handleChangeMax}
              className="w-full"
            />
          </div>
        </div>

        <input type="submit" value={t('tools.randomNumberGenerator.submit')} />
      </form>
    </Accordion>
  )
}