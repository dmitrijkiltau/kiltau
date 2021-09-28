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

const Result = styled(Input)`
  height: 100%;
  font-size: 1.75rem;
  text-align: center;
  box-shadow: 0 2px var(--color-accent-75);
`

const PercentageChange = () => {
  const value1Ref = useRef()
  const value2Ref = useRef()
  const resultRef = useRef()

  const [answer, setAnswer] = useState('a change')

  const handleChange = useCallback(
    (e) => {
      e?.preventDefault()

      const value1 = parseFloat(value1Ref.current.value)
      const value2 = parseFloat(value2Ref.current.value)

      let result = 0

      if (value1 > value2) {
        result = 100 - (100 * value2) / value1
        setAnswer('a decrease')
      }

      if (value1 < value2) {
        result = (100 * value2) / value1 - 100
        setAnswer('an increase')
      }

      resultRef.current.value = parseFloat(result.toFixed(2)) + ' %'
    },
    [value1Ref, value2Ref, resultRef]
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
                ref={value1Ref}
                name="value1"
                defaultValue="25"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="value">
                <Trans>to</Trans>
              </label>
              <Input
                type="number"
                ref={value2Ref}
                name="value2"
                defaultValue="50"
                onChange={handleChange}
              />
            </div>
          </Column>

          <Column lg={2} xs={2}>
            <label htmlFor="result">
              <Trans>is</Trans> <Trans>{answer}</Trans> <Trans>of</Trans>
            </label>
            <Result ref={resultRef} name="result" disabled />
          </Column>
        </Row>
      </form>
    </Tool>
  )
}

export default PercentageChange
