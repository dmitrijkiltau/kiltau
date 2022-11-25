import React, { useState, useEffect } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { nanoid } from 'nanoid'
import AnimatedNumber from '@plot-and-scatter/react-animated-number'
import { Accordion } from '../../elements/accordion'
import { Input } from '../../elements/input'

export const Percentage = ({ byN }) => {
  const { t } = useTranslation()
  const [n, setN] = useState(byN ?? 'value')
  const [percentage, setPercentage] = useState(25)
  const [value, setValue] = useState(100)
  const [answer, setAnswer] = useState('a change')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(0)

  const content = {
    'value': {
      id: nanoid(),
      changeResult: (value * percentage) / 100,
      resultPrepend: '',
      resultAppend: '',
      percentagePrepend: '',
      percentageAppend: '%',
      valuePrepend: '',
      valueAppend: ''
    },
    'percentage': {
      id: nanoid(),
      changeResult: (percentage / value) * 100,
      resultPrepend: '',
      resultAppend: '%',
      percentagePrepend: '',
      percentageAppend: '',
      valuePrepend: '',
      valueAppend: '',
    },
    'baseValue': {
      id: nanoid(),
      changeResult: (value * 100) / percentage,
      resultPrepend: '',
      resultAppend: '',
      percentagePrepend: '',
      percentageAppend: '%',
      valuePrepend: '',
      valueAppend: '',
    },
    'percentageChange': {
      id: nanoid(),
      changeResult: () => {
        let newResult = 0

        if (percentage > value) {
          newResult = 100 - (100 * value) / percentage
          setAnswer('is a decrease')
        } else {
          newResult = (100 * value) / percentage - 100
          setAnswer('is an increase')
        }

        return newResult
      },
      resultPrepend: '',
      resultAppend: '%',
      percentagePrepend: '',
      percentageAppend: '',
      valuePrepend: '',
      valueAppend: '',
    },
    'baseValueChange': {
      id: nanoid(),
      changeResult: () => {
        const switchOperation = {
          '+': (value * (100 + percentage)) / 100,
          '−': (value * (100 - percentage)) / 100,
          '×': (value * (100 + percentage)) / 100 - value,
          '÷': value * (100 / percentage)
        }

        return switchOperation[operation] ?? 0
      },
      resultPrepend: '',
      resultAppend: '%',
      percentagePrepend: '',
      percentageAppend: '%',
      valuePrepend: '',
      valueAppend: '',
    },
  }

  const type = content[n && Object.keys(content).includes(n) ? n : Object.keys(content)[0]]

  const handleChangeResult = (e) => {
    if (e) e.preventDefault()
    setResult(type.changeResult)
  }

  const handleChangePercentage = ({ target: { value } }) => setPercentage(parseFloat(value))
  const handleChangeValue = ({ target: { value } }) => setValue(parseFloat(value))
  const handleChangeOperation = ({ target: { value } }) => setOperation(value)

  const formatResult = (_value) => {
    return (type.resultPrepend && `${type.resultPrepend} `) + (parseFloat(_value.toFixed(2)) || result) + (type.resultAppend && ` ${type.resultAppend}`)
  }

  useEffect(handleChangeResult)

  const percentageLabel = t(`tools.percentageCalculator.${n}.percentage`)
  const valueLabel = t(`tools.percentageCalculator.${n}.value`)

  return (
    <Accordion
      id="percentage-calculator"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" className="icon">
          <path fill="currentColor" d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128c0-35.3-28.7-64-64-64S0 92.7 0 128s28.7 64 64 64s64-28.7 64-64zM384 384c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
        </svg>
      }
      title={t('tools.percentageCalculator.title')}
      description={t(`tools.percentageCalculator.${n}.description`)}
    >
      <form onChange={handleChangeResult} onSubmit={handleChangeResult}>
        <select className="types-select" value={n} onChange={({ target: { value } }) => setN(value)}>
          {Object.keys(content).map((typeN, index) => (
            <option key={`type-${index}`} value={typeN}>{t(`tools.percentageCalculator.${typeN}.title`)}</option>
          ))}
        </select>

        <AnimatedNumber
          className="result"
          component="span"
          id="percentage-result"
          value={result ?? 0}
          duration={300}
          formatValue={formatResult}
        />

        {n === 'percentageChange' && <span className="answer animate-fade-in-down-grow">{answer}</span>}

        {n === 'baseValueChange' && <div className="buttons">
          {['+', '−', '×', '÷'].map((item, index) => <input
            type="button"
            value={item}
            data-active={operation === item || undefined}
            onClick={handleChangeOperation}
            key={'operation-' + index}
          />)}
        </div>}

        <div className="grid grid-cols-2 gap-8">
          <div className="mt-auto">
            {percentageLabel && <label htmlFor="percentage">{percentageLabel}</label>}

            <Input
              type="number"
              id="percentage"
              value={percentage}
              onChange={handleChangePercentage}
              prepend={type.percentagePrepend || undefined}
              append={type.percentageAppend || undefined} />
          </div>

          <div className={`mt-auto${['Base Value', 'Base Value Change'].includes(n) ? ' row-start-1 col-start-1' : ''}`}>
            {valueLabel && <label htmlFor="percentage-value">{valueLabel}</label>}

            <Input
              type="number"
              id="percentage-value"
              value={value}
              onChange={handleChangeValue}
              prepend={type.valuePrepend || undefined}
              append={type.valueAppend || undefined} />
          </div>
        </div>
      </form>
    </Accordion>
  )
}
