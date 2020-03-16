import React from 'react'
import styled from 'styled-components'

const Avatar = styled.div`
  border-radius: 50%;
  background:${props => props.background ? props.background : '#ffffff'};
  color:  ${props => props.color ? props.color : '#ffffff'};
  font-size: 20px;
  height:48px;
  width:48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const avatar = ({initials, color, background}) => {
  return (
    <Avatar className="avatar" background={background} color={color}>
      {initials}
    </Avatar>
  )
}

export default avatar
