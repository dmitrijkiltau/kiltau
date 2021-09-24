import React from 'react'
import styled from 'styled-components'

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% / ${(props) => props.desktop || 1} - 2rem);
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  @media (max-width: 61rem) {
    flex: 0 0 calc(100% / ${(props) => props.tablet || 1} - 2rem);
  }

  @media (max-width: 36rem) {
    flex: 0 0 calc(100% / ${(props) => props.mobile || 1} - 2rem);
  }
`

const Column = ({
  desktop,
  tablet,
  mobile,
  alignItems,
  justifyContent,
  children,
}) => (
  <StyledColumn
    desktop={desktop}
    tablet={tablet}
    mobile={mobile}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledColumn>
)

export default Column
