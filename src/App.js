import React from 'react';
import { GlobalStyle } from './components/global/styles/index'
import styled from 'styled-components'
import HeaderInfoContainer from './components/header/headerInfoContainer'
import TransactionsContainer from './components/transactions/transactionsContainer'

const Main = styled.main`
  padding:32px 0;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HeaderInfoContainer />
      <Main>
        <div className="container">
          <TransactionsContainer />
        </div>
      </Main>

    </div>
  );
}

export default App;
