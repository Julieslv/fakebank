import React, { Fragment } from 'react'
import styled from 'styled-components'

const TransactionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const transactions = ({ transactions }) => {
  console.log(transactions);
  return (
    <Fragment>
    <ul>
      <li></li>
    </ul>
    </Fragment>
  )
}

export default transactions
