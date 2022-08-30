import React, { useState, useEffect } from 'react'
import { Trans } from 'react-i18next'

import { Form, Row, Column, Input, AnimatedResult } from '../components'

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
    <Form
      onChange={(e) => {
        e.preventDefault()
        handleChangeResult()
      }}
    >
      <Row columns={2}>
        <Column lg={1} xs={1}>
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

        <Column lg={1} xs={1}>
          <span>
            <Trans>is</Trans>
          </span>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>
      </Row>
    </Form>
  )
}

export default PercentageValue
