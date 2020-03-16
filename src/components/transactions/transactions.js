import React from 'react'
import styled from 'styled-components'
import Button from './../global/button/button'
import Avatar from '../global/avatar/avatar';

const Transactions = styled.div`
  h1{
    font-weight: bold;
    font-size: 24px;
  }
  h2{
    font-size: 12px;
    /* colour contrast issue */
    color: #03213D4d;
    text-transform: uppercase;
  }
  `;
const TransactionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li{
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border-radius: 10px;
    &:hover,
    &:active,
    &:focus{
      background: #F9F9FB;
    }
    > div{
      padding: 24px;
    }
    .name{
      font-size: 16px;
      font-weight:500;
    }
    .date{
      color: #03213D4d;
      font-size: 14px;
    }
    .details{
      flex-grow: 1;
    }
    .value{
    }
  }
  `;

const Filter = styled.div`
  display: flex;
  @media(min-width:768px){
    justify-content: flex-end;
  }
  align-items: center;
  button{
    margin-right: 16px;
    &:last-child{
      margin: 0;
    }
  }
`;

//Store these in a variable so as to use them in the loop fo the list
const greenGradient = 'radial-gradient(60.75% 166.59% at 88.04% 100%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%), #64CD94';
/* const yellowGradient = 'radial-gradient(60.75% 166.59% at 88.04% 100%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%), #FFCC2C';
const redGradient = 'radial-gradient(60.75% 166.59% at 88.04% 100%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%), #EB5757';
const purpleGradient = 'radial-gradient(60.75% 166.59% at 88.04% 100%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%), #BB6BD9';
const green = '#64CD94';
const yellow = '#FFCC2C;';
const redG = '#EB5757';
const purple = '#BB6BD9'; */

//TODO: filter out by the same date
//if the date is today, or conver the date.
//map over


const transactions = (props) => {
  console.log('props', props);
  return (
    <Transactions>
      <Filter>
        <Button type="small" state="active" label="All"/>
        <Button type="small" state="inactive" label="Outboud"/>
        <Button type="small" state="inactive" label="Inbound"/>
      </Filter>
      <h1>Transactions</h1>
      {/* `TODO: map loop here for */}
      <h2>Thursday 20 Feb</h2>
      <TransactionsList>
        <li onClick={console.log('check viewport and render new component')}>
          <Avatar background={greenGradient} initials= "SS" />
          <div className="details">
            <div className="name">Claire Henry</div>
            <div className="date">21 Feb, 9:17 PM</div>
            <div>
              <div>Reference</div>
              <div>1245125124156</div>
            </div>
          </div>
          <div className="value"> </div>
        </li>
      </TransactionsList>
    </Transactions>
  )
}

export default transactions
