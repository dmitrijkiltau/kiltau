import React from 'react'
import styled from 'styled-components'

const StyledAccordion = styled.details`
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

  &[open] summary {
    color: var(--color-primary-50);
  }

  & > div {
    margin-bottom: 1rem;
  }
`

const Accordion = ({ children, title, id, isOpen }) => {
  const slug = id
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

  const anchors = window.location.hash.split('#')

  const handleClick = () => {
    window.location.hash = anchors.includes(slug)
      ? anchors.filter((item) => item !== slug).join('#')
      : anchors.push(slug) && anchors.join('#')
  }

  return (
    <StyledAccordion id={slug || false} open={anchors.includes(slug) || isOpen}>
      <summary onClick={handleClick}>{title}</summary>
      <div>{children}</div>
    </StyledAccordion>
  )
}

export default Accordion
