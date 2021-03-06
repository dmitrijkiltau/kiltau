import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Form from '../form/form'
import Row from '../container/row'
import Column from '../container/column'
import AnimatedResult from '../form/animated-result'
import Input from '../form/input'

const Submit = styled.input`
  width: 100%;
`

const RandomNumber = () => {
  const { t } = useTranslation()

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  const [result, setResult] = useState(0)

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleChangeResult = () => {
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

  const formatValue = (value) => Math.floor(value)

  useEffect(() => setResult(getRandomNumber(min, max)), [min, max, setResult])

  return (
    <Form
      onChange={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
      onSubmit={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
    >
      <Row columns={2}>
        <Column lg={1} xs={1}>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>

        <Column lg={1} xs={1}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="random-number-min">Min.</label>
            <Input
              type="number"
              id="random-number-min"
              value={min}
              onChange={handleChangeMin}
            />
          </div>

          <div>
            <label htmlFor="random-number-max">Max.</label>
            <Input
              type="number"
              id="random-number-max"
              value={max}
              onChange={handleChangeMax}
            />
          </div>
        </Column>
      </Row>

      <Row columns={1}>
        <Column lg={1} xs={1}>
          <Submit type="submit" value={t('Generate')} />
        </Column>
      </Row>
    </Form>
  )
}

export default RandomNumber
