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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;

  input[type='button'] {
    flex: 1;

    &:hover,
    &.active {
      background-color: var(--color-accent-75);
    }
  }
`

const BaseValueChange = () => {
  const [value, setValue] = useState(50)
  const [operation, setOperation] = useState('+')
  const [percentage, setPercentage] = useState(25)
  const [result, setResult] = useState(0)

  const handleChangeResult = () => {
    let newResult

    switch (operation) {
      case '−':
        newResult = (value * (100 - percentage)) / 100
        break

      case '×':
        newResult = (value * (100 + percentage)) / 100 - value
        break

      case '÷':
        newResult = value * (100 / percentage)
        break

      default:
        newResult = (value * (100 + percentage)) / 100
        break
    }

    setResult(parseFloat(newResult.toFixed(2)))
  }

  const formatValue = (value) =>
    parseFloat(percentage) === 0 && operation === '÷'
      ? 'undefined'
      : parseFloat(value.toFixed(2))

  useEffect(handleChangeResult)

  return (
    <Tool
      onChange={(e) => {
        e.preventDefault()
        handleChangeResult(e)
      }}
    >
      <Row>
        <Column lg={2} xs={2}>
          <div style={{ marginBottom: '1rem' }}>
            <Input
              type="number"
              value={value}
              onChange={({ target: { value } }) =>
                setValue(parseFloat(value) || value)
              }
            />
          </div>

          <ButtonWrapper>
            {['+', '−', '×', '÷'].map((item, index) => (
              <input
                type="button"
                value={item}
                className={operation === item ? 'active' : ''}
                onClick={({ target: { value } }) => setOperation(value)}
                key={'operation-' + index}
              />
            ))}
          </ButtonWrapper>

          <div>
            <label htmlFor="base-value-change-percentage">%</label>
            <Input
              type="number"
              id="base-value-change-percentage"
              value={percentage}
              onChange={({ target: { value } }) =>
                setPercentage(parseFloat(value) || value)
              }
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

export default BaseValueChange
