import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.state === 'active' ? '#006BCD' : '#ffffff'};
  border: 1px solid ${props => props.state === 'active' ? '#006BCD' : '#D3DAE6'};
  border-radius: 10px;
  box-sizing:border-box;
  color: ${props => props.state === 'active' ? '#ffffff' : '#03213D40'};
  font-size: 14px;
  font-weight:400;
  margin-right:16px;
  padding:5px 8px;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;

  &:hover,
  &:active,
  &:focus{
    background-color:#006BCD;
    border-color:#006BCD;
    color:#ffffff;
  }

`;

const button = ({state, type, label}) => {
  return (
    <Button state={state} type={type}>
      {label}
    </Button>
  )
}

export default button
