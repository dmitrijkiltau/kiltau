import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

import Row from '../row'
import Column from '../column'
import Input from '../input'
import AnimatedResult from '../animated-result'

const Tool = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const PercentageChange = () => {
  const [value1, setValue1] = useState(25)
  const [value2, setValue2] = useState(50)
  const [result, setResult] = useState(0)
  const [answer, setAnswer] = useState('a change')

  const handleChangeResult = () => {
    let newResult = 0

    if (value1 > value2) {
      newResult = 100 - (100 * value2) / value1
      setAnswer('a decrease')
    }

    if (value1 < value2) {
      newResult = (100 * value2) / value1 - 100
      setAnswer('an increase')
    }

    setResult(newResult)
  }

  const handleChangeValue1 = ({ target: { value } }) => {
    setValue1(parseFloat(value) || value)
  }

  const handleChangeValue2 = ({ target: { value } }) => {
    setValue2(parseFloat(value) || value)
  }

  const formatValue = (value) => parseFloat(value.toFixed(2)) + ' %'

  useEffect(handleChangeResult)

  return (
    <Tool
      onChange={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
    >
      <Row>
        <Column lg={2} xs={2}>
          <div style={{ marginBottom: '1rem' }}>
            <Input type="number" value={value1} onChange={handleChangeValue1} />
          </div>

          <div>
            <label htmlFor="percentage-change-value2">
              <Trans>to</Trans>
            </label>
            <Input
              type="number"
              id="percentage-change-value2"
              value={value2}
              onChange={handleChangeValue2}
            />
          </div>
        </Column>

        <Column lg={2} xs={2}>
          <span>
            <Trans>is</Trans> <Trans>{answer}</Trans> <Trans>of</Trans>
          </span>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>
      </Row>
    </Tool>
  )
}

export default PercentageChange
