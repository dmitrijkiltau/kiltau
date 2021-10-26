import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

import Row from '../row'
import Column from '../column'
import Input from '../input'
import AnimatedResult from '../animated-result'

const Tool = styled.form`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const PercentageValue = () => {
  const [percentage, setPercentage] = useState(25)
  const [value, setValue] = useState(100)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => setResult((value * percentage) / 100)

  const handleChangePercentage = ({ target: { value } }) => {
    setPercentage(parseFloat(value) || value)
  }

  const handleChangeValue = ({ target: { value } }) => {
    setValue(parseFloat(value) || value)
  }

  const formatValue = (value) => parseFloat(value.toFixed(2))

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
            <label htmlFor="percentage-value-percentage">%</label>
            <Input
              type="number"
              id="percentage-value-percentage"
              value={percentage}
              onChange={handleChangePercentage}
            />
          </div>

          <div>
            <label htmlFor="percentage-value-value">
              <Trans>of</Trans>
            </label>
            <Input
              type="number"
              id="percentage-value-value"
              value={value}
              onChange={handleChangeValue}
            />
          </div>
        </Column>

        <Column lg={2} xs={2}>
          <span>
            <Trans>is</Trans>
          </span>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>
      </Row>
    </Tool>
  )
}

export default PercentageValue
