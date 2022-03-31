import React from 'react'
import styled from 'styled-components'

const StyledColumn = styled.div`
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

const Column = ({
  lg,
  md,
  sm,
  xs,
  direction,
  alignItems,
  justifyContent,
  children,
}) => (
  <StyledColumn
    lg={lg}
    md={md}
    sm={sm}
    xs={xs}
    direction={direction}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledColumn>
)

export default Column
