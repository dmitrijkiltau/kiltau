import React, { useState } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

import Row from '../row'
import Column from '../column'
import Input from '../input'

const Tool = styled.form`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: var(--color-accent-96);
    }

    &:focus + span {
      box-shadow: 0 0 1px var(--color-accent-96);
    }

    &:checked + span:before {
      transform: translateX(1.5rem);
    }
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-primary-80);
  border-radius: 2rem;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: 0.225rem;
    bottom: 0.225rem;
    background-color: var(--color-secondary);
    border-radius: 50%;
    transition: 0.4s;
  }
`

const InputColumn = ({ id, title, value, onChange, disabled }) => (
  <Column lg={1} xs={1}>
    <label htmlFor={id}>
      <Trans>{title}</Trans>
      <Input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </label>
  </Column>
)

const presets = [
  {
    value: 'custom',
    title: 'Custom',
  },
  {
    value: '16:9',
    title: 'HD 16:9',
    width: 16,
    height: 9,
  },
  { value: '4:3', title: 'Classic 4:3', width: 4, height: 3 },
  {
    value: '3:2',
    title: 'Classic Film 3:2',
    width: 3,
    height: 2,
  },
  {
    value: '21:9',
    title: 'Cinemascope 21:9',
    width: 21,
    height: 9,
  },
]

const AspectRatio = () => {
  const { t } = useTranslation()
  const [calculatePixel, setCalculatePixel] = useState(true)
  const [selectedPreset, setSelectedPreset] = useState({
    value: '16:9',
    title: 'HD 16:9',
    width: 16,
    height: 9,
  })
  const [ratioWidth, setRatioWidth] = useState(16)
  const [ratioHeight, setRatioHeight] = useState(9)
  const [pixelWidth, setPixelWidth] = useState(1280)
  const [pixelHeight, setPixelHeight] = useState(720)

  const findPreset = (value) => presets.find((preset) => preset.value === value)

  const gcd = (a, b) => {
    if (a === '' || b === '') return 0

    if (b === 0) return a

    return gcd(b, a % b)
  }

  const getPixelWidth = (pHeight, rWidth, rHeight) => {
    return parseFloat(((pHeight * rWidth) / rHeight).toFixed(2)) || 0
  }

  const getPixelHeight = (pWidth, rHeight, rWidth) => {
    return parseFloat(((pWidth * rHeight) / rWidth).toFixed(2)) || 0
  }

  const columns = {
    preset: {
      id: nanoid(),
      title: 'Presets',
    },
    ratio: [
      {
        id: nanoid(),
        title: 'Ratio width',
        value: ratioWidth,
        onChange:
          calculatePixel &&
          (({ target: { value } }) => {
            const newRatioWidth = parseFloat(value) || value

            setRatioWidth(newRatioWidth)
            setPixelHeight(
              getPixelHeight(pixelWidth, ratioHeight, newRatioWidth)
            )
            setSelectedPreset(findPreset('custom'))
          }),
        disabled: calculatePixel === false ? true : false,
      },
      {
        id: nanoid(),
        title: 'Ratio height',
        value: ratioHeight,
        onChange:
          calculatePixel &&
          (({ target: { value } }) => {
            const newRatioHeight = parseFloat(value) || value

            setRatioHeight(newRatioHeight)
            setPixelWidth(
              getPixelWidth(pixelHeight, ratioWidth, newRatioHeight)
            )
            setSelectedPreset(findPreset('custom'))
          }),
        disabled: calculatePixel === false ? true : false,
      },
    ],
    pixel: [
      {
        id: nanoid(),
        title: 'Pixel width',
        value: pixelWidth,
        onChange: ({ target: { value } }) => {
          const newPixelWidth = parseFloat(value) || value

          setPixelWidth(newPixelWidth)

          if (calculatePixel) {
            setPixelHeight(
              getPixelHeight(newPixelWidth, ratioHeight, ratioWidth)
            )
          } else {
            setRatioWidth(newPixelWidth / gcd(newPixelWidth, pixelHeight))
            setRatioHeight(pixelHeight / gcd(newPixelWidth, pixelHeight))
          }
        },
        disabled: false,
      },
      {
        id: nanoid(),
        title: 'Pixel height',
        value: pixelHeight,
        onChange: ({ target: { value } }) => {
          const newPixelHeight = parseFloat(value) || value

          setPixelHeight(newPixelHeight)

          if (calculatePixel) {
            setPixelWidth(
              getPixelWidth(newPixelHeight, ratioWidth, ratioHeight)
            )
          } else {
            setRatioWidth(pixelWidth / gcd(pixelWidth, newPixelHeight))
            setRatioHeight(newPixelHeight / gcd(pixelWidth, newPixelHeight))
          }
        },
        disabled: false,
      },
    ],
  }

  const handleChangePreset = ({ target: { value } }) => {
    const newPreset = findPreset(value)

    setSelectedPreset(newPreset)

    if (newPreset.value !== 'custom') {
      setRatioWidth(newPreset.width)
      setRatioHeight(newPreset.height)

      setPixelHeight(
        getPixelHeight(pixelWidth, newPreset.height, newPreset.width)
      )
    }
  }

  return (
    <Tool>
      <Row columns={1}>
        <Column
          lg={1}
          xs={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Trans>Ratio</Trans>
          <Switch>
            <input type="checkbox" checked={calculatePixel} readOnly="" />
            <Slider
              onClick={() => {
                setCalculatePixel(!calculatePixel)
              }}
            />
          </Switch>
          <Trans>Pixel</Trans>
        </Column>
      </Row>

      {calculatePixel && (
        <Row columns={1}>
          <Column lg={1} xs={1}>
            <label htmlFor={columns.preset.id}>
              <Trans>{columns.preset.title}</Trans>
              <select
                id={columns.preset.id}
                value={selectedPreset.value}
                onChange={handleChangePreset}
              >
                {presets.map((preset, index) => (
                  <option value={preset.value} key={`preset-${index}`}>
                    {t(preset.title)}
                  </option>
                ))}
              </select>
            </label>
          </Column>
        </Row>
      )}

      <Row columns={2}>
        {columns[calculatePixel ? 'ratio' : 'pixel'].map((column, index) => (
          <InputColumn
            id={column.id}
            title={column.title}
            value={column.value}
            onChange={column.onChange}
            disabled={column.disabled}
            key={`ratio-${index}`}
          />
        ))}
      </Row>

      <Row columns={2}>
        {columns[calculatePixel ? 'pixel' : 'ratio'].map((column, index) => (
          <InputColumn
            id={column.id}
            title={column.title}
            value={column.value}
            onChange={column.onChange}
            disabled={column.disabled}
            key={`pixel-${index}`}
          />
        ))}
      </Row>
    </Tool>
  )
}

export default AspectRatio
