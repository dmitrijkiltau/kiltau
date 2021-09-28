import React, { useRef, useCallback, useEffect } from 'react'
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

const Result = styled(Input)`
  height: 100%;
  font-size: 1.75rem;
  text-align: center;
  box-shadow: 0 2px var(--color-accent-75);
`

const BaseValue = () => {
  const valueRef = useRef()
  const percentageRef = useRef()
  const resultRef = useRef()

  const handleChange = useCallback(
    (e) => {
      e?.preventDefault()

      const value = parseFloat(valueRef.current.value)
      const percentage = parseFloat(percentageRef.current.value)

      resultRef.current.value = parseFloat(
        ((value * 100) / percentage).toFixed(2)
      )
    },
    [valueRef, percentageRef, resultRef]
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
                defaultValue="100"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="percentage">
                <Trans>is</Trans> %
              </label>
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
              <Trans>of</Trans>
            </label>
            <Result ref={resultRef} name="result" disabled />
          </Column>
        </Row>
      </form>
    </Tool>
  )
}

export default BaseValue
