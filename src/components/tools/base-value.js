import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

import Row from '../row'
import Column from '../column'
import Input from '../input'
import AnimatedResult from '../animated-result'

const Tool = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 0;
`

const BaseValue = () => {
  const [value, setValue] = useState(100)
  const [percentage, setPercentage] = useState(25)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => setResult((value * 100) / percentage)

  const handleChangeValue = ({ target: { value } }) => {
    return setValue(parseFloat(value) || value)
  }

  const handleChangePercentage = ({ target: { value } }) => {
    return setPercentage(parseFloat(value) || value)
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
            <Input type="number" value={value} onChange={handleChangeValue} />
          </div>

          <div>
            <label htmlFor="base-value-percentage">
              <Trans>is</Trans> %
            </label>
            <Input
              type="number"
              id="base-value-percentage"
              value={percentage}
              onChange={handleChangePercentage}
            />
          </div>
        </Column>

        <Column lg={2} xs={2}>
          <span>
            <Trans>of</Trans>
          </span>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>
      </Row>
    </Tool>
  )
}

export default BaseValue
