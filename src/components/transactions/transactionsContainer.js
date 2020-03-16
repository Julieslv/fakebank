import React, { useState, useEffect } from "react"
import Transactions from './transactions'

const TransactionsContainer = props => {

  const [ transactions, setTransactions ] = useState([]);

  useEffect( () => {
    fetch('http://dev-test.torca.io/transactions')
      .then(response => response.json())
      .then(results => {
        const transactions = results.data;
        setTransactions(transactions);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  // console.log(transactions)

  return <Transactions transactions={transactions}/>
}

export default TransactionsContainer
