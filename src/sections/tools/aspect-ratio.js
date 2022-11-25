import React, { useState } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { nanoid } from 'nanoid'
import { Accordion } from '../../elements/accordion'

const presets = [
  {
    value: 'custom'
  },
  {
    value: 'hd',
    width: 16,
    height: 9,
  },
  {
    value: 'classic',
    width: 4,
    height: 3,
  },
  {
    value: 'classicFilm',
    width: 3,
    height: 2,
  },
  {
    value: 'cinemascope',
    width: 21,
    height: 9,
  },
]

export const AspectRatio = () => {
  const { t } = useTranslation()
  const [calculatePixel, setCalculatePixel] = useState(true)
  const [selectedPreset, setSelectedPreset] = useState(presets[1])
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
    id: nanoid(),
    ratio: [
      {
        id: nanoid(),
        title: t('tools.aspectRatioCalculator.ratio.width'),
        value: ratioWidth,
        onChange: calculatePixel
          ? ({ target: { value } }) => {
            const newRatioWidth = parseFloat(value) || value

            setRatioWidth(newRatioWidth)
            setPixelHeight(getPixelHeight(pixelWidth, ratioHeight, newRatioWidth))
            setSelectedPreset(findPreset('custom'))
          }
          : undefined,
        disabled: calculatePixel === false ? true : false,
      },
      {
        id: nanoid(),
        title: t('tools.aspectRatioCalculator.ratio.height'),
        value: ratioHeight,
        onChange: calculatePixel
          ? ({ target: { value } }) => {
            const newRatioHeight = parseFloat(value) || value

            setRatioHeight(newRatioHeight)
            setPixelWidth(getPixelWidth(pixelHeight, ratioWidth, newRatioHeight))
            setSelectedPreset(findPreset('custom'))
          }
          : undefined,
        disabled: calculatePixel === false ? true : false,
      },
    ],
    pixel: [
      {
        id: nanoid(),
        title: t('tools.aspectRatioCalculator.pixel.width'),
        value: pixelWidth,
        onChange: ({ target: { value } }) => {
          const newPixelWidth = parseFloat(value) || value

          setPixelWidth(newPixelWidth)

          if (calculatePixel) {
            setPixelHeight(getPixelHeight(newPixelWidth, ratioHeight, ratioWidth))
          } else {
            setRatioWidth(newPixelWidth / gcd(newPixelWidth, pixelHeight))
            setRatioHeight(pixelHeight / gcd(newPixelWidth, pixelHeight))
          }
        },
        disabled: false,
      },
      {
        id: nanoid(),
        title: t('tools.aspectRatioCalculator.pixel.width'),
        value: pixelHeight,
        onChange: ({ target: { value } }) => {
          const newPixelHeight = parseFloat(value) || value

          setPixelHeight(newPixelHeight)

          if (calculatePixel) {
            setPixelWidth(getPixelWidth(newPixelHeight, ratioWidth, ratioHeight))
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

    if (newPreset.value === 'custom') return;

    setRatioWidth(newPreset.width)
    setRatioHeight(newPreset.height)
    setPixelHeight(getPixelHeight(pixelWidth, newPreset.height, newPreset.width))
  }

  return (
    <Accordion
      id="aspect-ratio"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="icon">
          <path fill="currentColor" d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
        </svg>
      }
      title={t('tools.aspectRatioCalculator.title')}
      description={t('tools.aspectRatioCalculator.description')}
    >
      <form id="aspect-ratio-form" action="#aspect-ratio">
        <div className="tabs" data-active={calculatePixel ? '' : undefined}>
          <input type="button" data-active={!calculatePixel ? '' : undefined} onClick={() => setCalculatePixel(false)} value="Ratio" />
          <input type="button" data-active={calculatePixel ? '' : undefined} onClick={() => setCalculatePixel(true)} value="Pixel" />
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          {calculatePixel && (
            <div className="col-span-2 grid gap-2 mb-8 animate-fade-in-down-grow">
              <label htmlFor={columns.id} className="flex-1">
                {t('tools.aspectRatioCalculator.preset.title')}
              </label>

              <select
                id={columns.id}
                className="flex-1"
                value={selectedPreset.value}
                onChange={handleChangePreset}
              >
                {presets.map((preset, index) => (
                  <option value={preset.value} key={`preset-${index}`}>
                    {t(`tools.aspectRatioCalculator.preset.${preset.value}`)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {columns[calculatePixel ? 'ratio' : 'pixel'].map((column, index) => (
            <div className="flex flex-col justify-between mb-8"
              key={`ratio-${index}`}>
              <label htmlFor={column.id}>{column.title}</label>
              <input
                type="number"
                id={column.id}
                value={column.value}
                onChange={column.onChange}
                disabled={column.disabled}
              />
            </div>
          ))}


          {columns[calculatePixel ? 'pixel' : 'ratio'].map((column, index) => (
            <div className="flex flex-col justify-between"
              key={`pixel-${index}`}>
              <label htmlFor={column.id}>{column.title}</label>
              <input
                type="number"
                id={column.id}
                value={column.value}
                onChange={column.onChange}
                disabled={column.disabled}
              />
            </div>
          ))}
        </div>
      </form>
    </Accordion>
  )
}
