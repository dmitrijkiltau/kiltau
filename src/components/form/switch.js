import React from 'react'
import styled from 'styled-components'

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

const Switch = ({ checked = false, onClick = () => {} }) => {
  return (
    <StyledSwitch>
      <input type="checkbox" defaultChecked={checked} readOnly="" />
      <StyledSlider onClick={onClick}></StyledSlider>
    </StyledSwitch>
  )
}

export default Switch
