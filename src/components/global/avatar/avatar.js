import React from 'react'
import styled from 'styled-components'

const Avatar = styled.div`
  border-radius: 50%;
  background-color: #ffffff;
  color:  ${props => props.color};
  font-size: 20px;
  height:48px;
  width:48px;
  display: flex;
  align-items: center;
  justify-content: center
`;

const avatar = (props) => {
  console.log(props)
  return (
    <Avatar className="avatar" color={props.color}>
      {props.initial}
    </Avatar>
  )
}

export default avatar
