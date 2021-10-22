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

const Percentage = () => {
  const [value1, setValue1] = useState(25)
  const [value2, setValue2] = useState(100)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => {
    setResult((value1 / value2) * 100)
  }

  const handleChangeValue1 = ({ target: { value } }) => {
    setValue1(value)
    handleChangeResult()
  }

  const handleChangeValue2 = ({ target: { value } }) => {
    setValue2(value)
    handleChangeResult()
  }

  const formatValue = (value) => `${parseFloat(value.toFixed(2))} %`

  useEffect(handleChangeResult)

  return (
    <Tool>
      <Row>
        <Column lg={2} xs={2}>
          <div style={{ marginBottom: '1rem' }}>
            <Input type="number" value={value1} onChange={handleChangeValue1} />
          </div>

          <div>
            <label htmlFor="percentage-value">
              <Trans>of</Trans>
            </label>
            <Input
              type="number"
              id="percentage-value"
              value={value2}
              onChange={handleChangeValue2}
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

export default Percentage
