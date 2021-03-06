import React, { useState, useEffect } from 'react'
import { Trans } from 'react-i18next'

import Form from '../form/form'
import Row from '../container/row'
import Column from '../container/column'
import Input from '../form/input'
import AnimatedResult from '../form/animated-result'

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

        <Column lg={1} xs={1}>
          <span>
            <Trans>is</Trans> <Trans>{answer}</Trans> <Trans>of</Trans>
          </span>
          <AnimatedResult value={result} formatValue={formatValue} />
        </Column>
      </Row>
    </Form>
  )
}

export default PercentageChange
