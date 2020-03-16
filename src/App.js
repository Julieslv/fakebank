import React from 'react';
import { GlobalStyle } from './components/global/styles/index'
import styled from 'styled-components'
import Header from './components/header/header'
import TransactionsContainer from './components/transactions/transactionsContainer'

const Main = styled.main`
  padding:32px 0;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header color="#006BCD" />
      <Main>
        <div className="container">
          <TransactionsContainer />
        </div>
      </Main>

    </div>
  );
}

export default App;
