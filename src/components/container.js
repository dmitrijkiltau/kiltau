import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: 2rem;
`

const Row = ({ fullHeight, columns, alignItems, justifyContent, children }) => (
  <StyledContainer
    fullHeight={fullHeight}
    columns={columns}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledContainer>
)

export default Row
