import React from 'react'
import styled from 'styled-components'

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% / ${(props) => props.lg || 1} - 2rem);
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  @media (max-width: 61rem) {
    flex: 0 0 calc(100% / ${(props) => props.md || props.lg || 1} - 2rem);
  }

  @media (max-width: 48rem) {
    flex: 0 0
      calc(100% / ${(props) => props.sm || props.md || props.lg || 1} - 2rem);
  }

  @media (max-width: 36rem) {
    flex: 0 0 calc(100% / ${(props) => props.xs || 1} - 2rem);
  }
`

const Column = ({ lg, md, sm, xs, alignItems, justifyContent, children }) => (
  <StyledColumn
    lg={lg}
    md={md}
    sm={sm}
    xs={xs}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledColumn>
)

export default Column
