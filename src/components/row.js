import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-right: -2rem;
`

const Row = ({ fullHeight, children }) => (
  <StyledRow fullHeight={fullHeight}>{children}</StyledRow>
)

export default Row
