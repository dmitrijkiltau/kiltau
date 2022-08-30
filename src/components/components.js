import React from 'react'
import styled from 'styled-components'
import AnimatedNumber from 'animated-number-react'

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: 2rem;
`

export const Flex = styled.div`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: 2rem;
`

export const Row = styled.div`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 12}, 1fr);
  grid-auto-rows: auto;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: 2rem;
`

export const Column = styled.div`
  width: 100%;
  height: 100%;
  grid-column: span ${(props) => props.lg || 12};
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  @media (max-width: 81rem) {
    grid-column: span / ${(props) => props.md || props.lg || 12};
  }

  @media (max-width: 61rem) {
    grid-column: span ${(props) => props.sm || props.md || props.lg || 12};
  }

  @media (max-width: 36rem) {
    grid-column: span ${(props) => props.xs || 12};
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 0 2rem 0;
`

export const Input = styled.input`
  -moz-appearance: textfield;
  text-align: end;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const AnimatedResult = styled(AnimatedNumber)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  text-align: center;
  box-shadow: 0 2px var(--color-accent-75);
  white-space: nowrap;
`

const StyledSwitch = styled.label`
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

const StyledSlider = styled.span`
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

export const Switch = ({ checked = false, onClick = () => {} }) => {
  return (
    <StyledSwitch>
      <input type="checkbox" defaultChecked={checked} readOnly="" />
      <StyledSlider onClick={onClick}></StyledSlider>
    </StyledSwitch>
  )
}

const StyledAccordion = styled.details`
  width: 100%;

  summary {
    line-height: 1.5;
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--color-primary-80);
    transition: all 0.2s ease-in-out;
    margin-bottom: 0.5rem;

    &:hover {
      color: var(--color-primary-50);
    }
  }

  &[open] {
    summary {
      color: var(--color-primary-50);
    }

    & > div {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & > div {
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(-45deg);
    transform-origin: 50% 0;
    transition: all 0.5s ease-in-out;
  }
`

export const Accordion = ({ children, title, id, isOpen, location }) => {
  const slug = id
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

  const anchors = location.hash.split('#')

  return (
    <StyledAccordion id={slug || false} open={anchors.includes(slug) || isOpen}>
      <summary>{title}</summary>
      <div>{children}</div>
    </StyledAccordion>
  )
}
