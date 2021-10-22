import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Row from '../row'
import Column from '../column'
import AnimatedResult from '../animated-result'
import Input from '../input'

const Tool = styled.form`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Submit = styled.input`
  width: 100%;
`

const RandomNumber = () => {
  const { t } = useTranslation()

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => {
    const currentMin = min
    const currentMax = max

    if (currentMin > currentMax) {
      setMin(currentMax)
      setMax(currentMin)
    }

    let randomNumber = result

    while (randomNumber === result) {
      randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    }

    setResult(randomNumber)
  }

  const handleChangeMin = ({ target: { value } }) => {
    setMin(Math.ceil(value))
    handleChangeResult()
  }

  const handleChangeMax = ({ target: { value } }) => {
    setMax(Math.floor(value))
    handleChangeResult()
  }

  const formatValue = (value) => Math.floor(value)

  useEffect(
    () => setResult(Math.floor(Math.random() * (max - min + 1) + min)),
    [min, max]
  )

  return (
    <Tool
      onSubmit={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
    >
      <Row>
        <Column lg={2} xs={2}>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>

        <Column lg={2} xs={2}>
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

      <Row>
        <Column>
          <Submit type="submit" value={t('Generate')} />
        </Column>
      </Row>
    </Tool>
  )
}

export default RandomNumber
