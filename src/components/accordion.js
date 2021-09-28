import React from 'react'
import styled from 'styled-components'

const StyledAccordion = styled.details`
  summary {
    line-height: 1.5;
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--color-primary-80);
    transition: all .2s ease-in-out;

    &:hover {
      color: var(--color-primary-50);
    }
  }

  &[open] {
    summary {
      color: var(--color-primary-50);
    }
  }
`

const Accordion = ({ children, title }) => (
  <StyledAccordion>
    <summary>{title}</summary>
    <div>{children}</div>
  </StyledAccordion>
)

export default Accordion
