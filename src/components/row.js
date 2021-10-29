import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 12}, 1fr);
  grid-auto-rows: 1fr;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: 2rem;
`

const Row = ({ fullHeight, columns, alignItems, justifyContent, children }) => (
  <StyledRow
    fullHeight={fullHeight}
    columns={columns}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledRow>
)

export default Row
