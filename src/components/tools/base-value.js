import React, { useState, useEffect } from 'react'
import { Trans } from 'react-i18next'

import Form from '../form/form'
import Row from '../container/row'
import Column from '../container/column'
import Input from '../form/input'
import AnimatedResult from '../form/animated-result'

const BaseValue = () => {
  const [value, setValue] = useState(100)
  const [percentage, setPercentage] = useState(25)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => setResult((value * 100) / percentage)

  const handleChangeValue = ({ target: { value } }) => {
    setValue(parseFloat(value) || value)
  }

  const handleChangePercentage = ({ target: { value } }) => {
    setPercentage(parseFloat(value) || value)
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

        <Column lg={1} xs={1}>
          <span>
            <Trans>of</Trans>
          </span>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>
      </Row>
    </Form>
  )
}

export default BaseValue
