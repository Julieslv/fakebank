import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background:red;
`;

export const header = () => {
  return (
    <Header>
      <div className="container">
        the logo
      </div>
   </Header>
  )
}

export default header

