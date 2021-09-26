import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

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

const Submit = styled.input`
  width: 100%;
`

const RandomNumber = () => {
  const { t } = useTranslation()

  const minNumberRef = useRef()
  const maxNumberRef = useRef()
  const randomNumberRef = useRef()

  const [lastRandomNumber, setLastRandomNumber] = useState(0)

  const animateRandomNumber = useCallback(
    (start, end, duration) => {
      let startTimestamp = null

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp

        const progress = Math.min((timestamp - startTimestamp) / duration, 1)

        randomNumberRef.current.value = Math.floor(
          progress * (end - start) + start
        )

        if (progress < 1) window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step)
    },
    [randomNumberRef]
  )

  const handleChange = useCallback(
    (e) => {
      e?.preventDefault()

      setTimeout(function () {
        e.target.value = Math.round(e.target.value)

        const min = Math.round(minNumberRef.current.value)
        const max = Math.round(maxNumberRef.current.value)

        if (max < min) {
          minNumberRef.current.value = max
          maxNumberRef.current.value = min
        }

        let randomNumber = lastRandomNumber

        while (randomNumber === lastRandomNumber) {
          randomNumber = Math.round(Math.random() * (max - min) + min)
        }

        animateRandomNumber(lastRandomNumber, randomNumber, 1000)
        setLastRandomNumber(randomNumber)
      }, 300)
    },
    [lastRandomNumber, animateRandomNumber, setLastRandomNumber]
  )

  return (
    <Tool>
      <form onSubmit={(e) => handleChange(e)}>
        <Row>
          <Column lg={2} xs={2}>
            <Result type="number" ref={randomNumberRef} disabled />
          </Column>

          <Column lg={2} xs={2}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="minNumber">Min</label>
              <Input
                type="number"
                ref={minNumberRef}
                name="minNumber"
                defaultValue="1"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="maxNumber">Max</label>
              <Input
                type="number"
                ref={maxNumberRef}
                name="maxNumber"
                defaultValue="10"
                onChange={handleChange}
              />
            </div>
          </Column>
        </Row>

        <Row>
          <Column>
            <Submit type="submit" value={t("Generate")} />
          </Column>
        </Row>
      </form>
    </Tool>
  )
}

export default RandomNumber
