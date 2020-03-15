import React from 'react';
import { GlobalStyle } from './components/global/styles/index'
import Header from './components/header/header'
import TransactionsContainer from './components/transactions/transactionsContainer'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header color="#006BCD" />
      <main className="main">
        <div className="container">
          <TransactionsContainer />
        </div>
      </main>

    </div>
  );
}

export default App;
