import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

import Container from '../container'
import Flex from '../flex'
import Input from '../input'
import Switch from '../switch'
const Tool = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 0;
`

const Submit = styled.input`
  width: 100%;
`

const StyledResult = styled(Input)`
  text-align: center;
  box-shadow: 0 2px var(--color-accent-75);
`

const PasswordGenerator = () => {
  const { t } = useTranslation()

  const [length, setLength] = useState(10)
  const [withLowercase, setWithLowercase] = useState(true)
  const [withUppercase, setWithUppercase] = useState(true)
  const [withNumbers, setWithNumbers] = useState(true)
  const [withSpecial, setWithSpecial] = useState(true)
  const [password, setPassword] = useState('')

  const handleChangeLength = ({ target: { value } }) => {
    setLength(value)
  }

  const generatePassword = (len = 10) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const upperChars = chars.toUpperCase()
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let newPassword = ''
    let characters = ''

    if (withLowercase) {
      characters += chars
    }

    if (withUppercase) {
      characters += upperChars
    }

    if (withNumbers) {
      characters += numbers
    }

    if (withSpecial) {
      characters += special
    }

    for (let i = 0; i < len; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length + 1)
      )
    }

    return newPassword
  }

  const handleChangeResult = () => {
    setPassword(generatePassword(length))
  }

  useEffect(handleChangeResult, [])

  return (
    <Tool
      onSubmit={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
    >
      <Container>
        <div>
          <Trans>Length</Trans>
          <Input
            type="number"
            value={length}
            min="1"
            step="1"
            onChange={handleChangeLength}
          />
        </div>

        <Flex justifyContent="space-between">
          <Trans>Lowercase letters</Trans>
          <Switch
            checked={withLowercase}
            onClick={() => setWithLowercase(!withLowercase)}
          />
        </Flex>

        <Flex justifyContent="space-between">
          <Trans>Uppercase letters</Trans>
          <Switch
            checked={withUppercase}
            onClick={() => setWithUppercase(!withUppercase)}
          />
        </Flex>

        <Flex justifyContent="space-between">
          <Trans>Numbers</Trans>
          <Switch
            checked={withNumbers}
            onClick={() => setWithNumbers(!withNumbers)}
          />
        </Flex>

        <Flex justifyContent="space-between">
          <Trans>Special characters</Trans>
          <Switch
            checked={withSpecial}
            onClick={() => setWithSpecial(!withSpecial)}
          />
        </Flex>

        <div>
          <Trans>Password</Trans>
          <StyledResult type="text" value={password} disabled />
        </div>
        <Submit type="submit" value={t('Generate')} />
      </Container>
    </Tool>
  )
}

export default PasswordGenerator
