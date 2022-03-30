import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: 2rem;
`

const Flex = ({ fullHeight, alignItems, justifyContent, children }) => (
  <StyledFlex
    fullHeight={fullHeight}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledFlex>
)

export default Flex
