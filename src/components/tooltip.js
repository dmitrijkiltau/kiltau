import React from 'react'
import styled from 'styled-components'

const StyledTooltip = styled.span`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted var(--color-primary-80);

  &:hover span {
    visibility: visible;
  }
`

const Text = styled.span`
  visibility: hidden;
  width: 16rem;
  background-color: var(--color-primary-80);
  color: var(--color-secondary);
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -9rem;
  transition: all 0.4s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: var(--color-primary-80) transparent transparent transparent;
  }
`

const Tooltip = ({ text, children }) => (
  <StyledTooltip>
    {text}
    <Text>{children}</Text>
  </StyledTooltip>
)

export default Tooltip
