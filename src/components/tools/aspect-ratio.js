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

const InputColumn = ({ id, title, value, onChange }) => (
  <Column lg={2} xs={2}>
    <label htmlFor={id}>
      <Trans>{title}</Trans>
    </label>
    <Input type="number" id={id} value={value} onChange={onChange} />
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
        onChange: ({ target: { value } }) => {
          const newRatioWidth = parseFloat(value) || value

          setRatioWidth(newRatioWidth)
          setPixelHeight(getPixelHeight(pixelWidth, ratioHeight, newRatioWidth))
          setSelectedPreset(findPreset('custom'))
        },
      },
      {
        id: nanoid(),
        title: 'Ratio height',
        value: ratioHeight,
        onChange: ({ target: { value } }) => {
          const newRatioHeight = parseFloat(value) || value

          setRatioHeight(newRatioHeight)
          setPixelWidth(getPixelWidth(pixelHeight, ratioWidth, newRatioHeight))
          setSelectedPreset(findPreset('custom'))
        },
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
          setPixelHeight(getPixelHeight(newPixelWidth, ratioHeight, ratioWidth))
        },
      },
      {
        id: nanoid(),
        title: 'Pixel height',
        value: pixelHeight,
        onChange: ({ target: { value } }) => {
          const newPixelHeight = parseFloat(value) || value

          setPixelHeight(newPixelHeight)
          setPixelWidth(getPixelWidth(newPixelHeight, ratioWidth, ratioHeight))
        },
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
      <Row>
        <Column lg={1}>
          <label htmlFor={columns.preset.id}>
            <Trans>{columns.preset.title}</Trans>
          </label>
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
        </Column>
      </Row>

      <Row>
        {columns.ratio.map((column, index) => (
          <InputColumn
            id={column.id}
            title={column.title}
            value={column.value}
            onChange={column.onChange}
            key={`ratio-${index}`}
          />
        ))}
      </Row>

      <Row>
        {columns.pixel.map((column, index) => (
          <InputColumn
            id={column.id}
            title={column.title}
            value={column.value}
            onChange={column.onChange}
            key={`pixel-${index}`}
          />
        ))}
      </Row>
    </Tool>
  )
}

export default AspectRatio
