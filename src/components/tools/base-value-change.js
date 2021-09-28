import React, { useRef, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

import Row from '../row'
import Column from '../column'

const Tool = styled.div`
  margin: 1rem 0;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const Input = styled.input`
  -moz-appearance: textfield;
  text-align: end;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
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

const Result = styled(Input)`
  height: 100%;
  font-size: 1.75rem;
  text-align: center;
  box-shadow: 0 2px var(--color-accent-75);
`

const BaseValueChange = () => {
  const valueRef = useRef()
  const percentageRef = useRef()
  const resultRef = useRef()

  const [operation, setOperation] = useState('+')

  const handleChange = useCallback(
    (e) => {
      e?.preventDefault()

      const value = parseFloat(valueRef.current.value)
      const percentage = parseFloat(percentageRef.current.value)

      let result = (value * (100 + percentage)) / 100

      if (operation === '-') {
        result = (value * (100 - percentage)) / 100
      }

      if (operation === '*') {
        result = (value * (100 + percentage)) / 100 - value
      }

      if (operation === ':') {
        result = value * (100 / percentage)
      }

      resultRef.current.value =
        result === Number.POSITIVE_INFINITY ||
        result === Number.NEGATIVE_INFINITY
          ? 'undefined'
          : parseFloat(result.toFixed(2))
    },
    [valueRef, percentageRef, operation, resultRef]
  )

  const handleOperationButtonClick = useCallback(
    (e, operation) => {
      setOperation(operation)
      handleChange(e)
    },
    [setOperation, handleChange]
  )

  useEffect(handleChange)

  return (
    <Tool>
      <form onSubmit={(e) => handleChange(e)}>
        <Row>
          <Column lg={2} xs={2}>
            <div style={{ marginBottom: '1rem' }}>
              <Input
                type="number"
                ref={valueRef}
                name="value"
                defaultValue="50"
                onChange={handleChange}
              />
            </div>

            <ButtonWrapper>
              {['+', '-', '*', ':'].map((item, index) => (
                <input
                  type="button"
                  value={item}
                  className={operation === item ? 'active' : ''}
                  key={'operation-' + index}
                  onClick={(e) => handleOperationButtonClick(e, item)}
                />
              ))}
            </ButtonWrapper>

            <div>
              <label htmlFor="value">%</label>
              <Input
                type="number"
                ref={percentageRef}
                name="percentage"
                defaultValue="25"
                onChange={handleChange}
              />
            </div>
          </Column>

          <Column lg={2} xs={2}>
            <label htmlFor="result">
              <Trans>is</Trans>
            </label>
            <Result ref={resultRef} name="result" disabled />
          </Column>
        </Row>
      </form>
    </Tool>
  )
}

export default BaseValueChange
