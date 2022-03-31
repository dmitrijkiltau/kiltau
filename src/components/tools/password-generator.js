import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

import Form from '../form/form'
import Container from '../container/container'
import Column from '../container/column'
import Flex from '../container/flex'
import Input from '../form/input'
import Switch from '../form/switch'

const Submit = styled.input`
  width: 100%;
`

const StyledResult = styled(Input)`
  text-align: center;
  box-shadow: 0 2px var(--color-accent-75);
`

const PasswordGenerator = () => {
  const { t } = useTranslation()

  const [length, setLength] = useState(12)
  const [withLowercase, setWithLowercase] = useState(true)
  const [withUppercase, setWithUppercase] = useState(true)
  const [withNumbers, setWithNumbers] = useState(true)
  const [withSpecial, setWithSpecial] = useState(true)
  const [password, setPassword] = useState('')

  const handleChangeLength = ({ target: { value } }) => {
    setLength(value)
  }

  const handleChangeResult = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const upperChars = chars.toUpperCase()
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let newPassword = ''
    let characters = ''

    if (withLowercase) characters += chars
    if (withUppercase) characters += upperChars
    if (withNumbers) characters += numbers
    if (withSpecial) characters += special

    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length + 1)
      )
    }

    setPassword(newPassword)
  }

  useEffect(handleChangeResult, [
    length,
    withLowercase,
    withUppercase,
    withNumbers,
    withSpecial,
  ])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
    >
      <Container>
        <Column>
          <Trans>Length</Trans>
          <Input
            type="number"
            value={length}
            min="1"
            step="1"
            onChange={handleChangeLength}
          />
        </Column>

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

        <Column>
          <Trans>Password</Trans>
          <StyledResult type="text" value={password} disabled />
        </Column>

        <Submit type="submit" value={t('Generate')} />
      </Container>
    </Form>
  )
}

export default PasswordGenerator
