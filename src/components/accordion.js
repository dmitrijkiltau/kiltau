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

  &[open] summary {
    color: var(--color-primary-50);
  }

  & > div {
    margin-bottom: 1rem;
  }
`

const Accordion = ({ children, title, id, isOpen, location }) => {
  const slug = id
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

  const anchors = location.hash.split('#')

  const handleClick = () => {
    location.hash = anchors.includes(slug)
      ? anchors.filter((item) => item !== slug).join('#')
      : anchors.push(slug) && anchors.join('#')

    if (typeof window !== 'undefined') window.location.hash = location.hash
  }

  // TODO: fix open accordion with anchor link
  return (
    <StyledAccordion id={slug || false} open={anchors.includes(slug) || isOpen}>
      <summary onClick={handleClick}>{title}</summary>
      <div>{children}</div>
    </StyledAccordion>
  )
}

export default Accordion
