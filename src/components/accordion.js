import React from 'react'
import styled from 'styled-components'

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
    transition: all .5s ease-in-out;
  }
`

const Accordion = ({ children, title, id, isOpen, location }) => {
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

export default Accordion
