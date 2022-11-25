import React, { useState, useEffect } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Accordion } from '../../elements/accordion'

export const Password = () => {
  const { t } = useTranslation()
  const [length, setLength] = useState(12)
  const [custom, setCustom] = useState('')
  const [withLowercase, setWithLowercase] = useState(true)
  const [withUppercase, setWithUppercase] = useState(true)
  const [withNumbers, setWithNumbers] = useState(true)
  const [withSpecial, setWithSpecial] = useState(true)
  const [password, setPassword] = useState('')

  const handleChangeLength = ({ target: { value } }) => setLength(value)
  const handleChangeCustom = ({ target: { value } }) => setCustom(value)

  const handleChangeResult = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const upperChars = chars.toUpperCase()
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let newPassword = ''
    let characters = custom;

    if (withLowercase) characters += chars
    if (withUppercase) characters += upperChars
    if (withNumbers) characters += numbers
    if (withSpecial) characters += special

    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    setPassword(newPassword)
  }

  useEffect(handleChangeResult, [length, custom, withLowercase, withUppercase, withNumbers, withSpecial])

  const checkboxes = [
    {
      key: 'lowercase',
      value: withLowercase,
      e: () => setWithLowercase(!withLowercase)
    },
    {
      key: 'uppercase',
      value: withUppercase,
      e: () => setWithUppercase(!withUppercase)
    },
    {
      key: 'numbers',
      value: withNumbers,
      e: () => setWithNumbers(!withNumbers)
    },
    {
      key: 'special',
      value: withSpecial,
      e: () => setWithSpecial(!withSpecial)
    }
  ]

  return (
    <Accordion
      id="password"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="icon">
          <path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zm40-176c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z" />
        </svg>
      }
      title={t('tools.passwordGenerator.title')}
      description={t('tools.passwordGenerator.description')}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleChangeResult()
        }}
      >
        <p className="result">{password}</p>

        <div className="sm:row-start-2 sm:col-start-1">
          <label htmlFor="password-length">
            {t('tools.passwordGenerator.length')}
          </label>
          <input type="number" id="password-length" value={length} min="1" step="1" onChange={handleChangeLength} />
        </div>

        <div className="sm:row-start-2 sm:col-start-2">
          <label htmlFor="password-custom">
            {t('tools.passwordGenerator.custom')}
          </label>
          <input type="text" id="password-custom" value={custom} onChange={handleChangeCustom} />
        </div>

        {checkboxes.map((box, index) => <div className={`sm:col-start-${index % 2 === 0 ? 1 : 2} w-full flex items-center justify-between`} key={`password-${index}`}>
          <label htmlFor={`password-${box.key}`} className="mb-0">
            {t(`tools.passwordGenerator.${box.key}`)}
          </label>
          <input type="checkbox" className="w-4 h-4" id={`password-${box.key}`} checked={box.value} onChange={box.e} />
        </div>)}

        <input type="submit" value={'Generate'} />
      </form>
    </Accordion>
  )
}
