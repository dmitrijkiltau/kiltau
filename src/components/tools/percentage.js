import React, { useState, useEffect } from 'react'
import { Trans } from 'react-i18next'

import { Form, Row, Column, Input, AnimatedResult } from '../components'

const Percentage = () => {
  const [value1, setValue1] = useState(25)
  const [value2, setValue2] = useState(100)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => setResult((value1 / value2) * 100)

  const handleChangeValue1 = ({ target: { value } }) => {
    setValue1(parseFloat(value) || value)
  }

  const handleChangeValue2 = ({ target: { value } }) => {
    setValue2(parseFloat(value) || value)
  }

  const formatValue = (value) => parseFloat(value.toFixed(2)) + ' %'

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

export default Percentage
