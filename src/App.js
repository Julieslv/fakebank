import React from 'react';
import { GlobalStyle } from './components/global/styles/index'
import Header from './components/header/header'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header color="#006BCD" />
      <main className="main">

      </main>
    </div>
  );
}

export default App;
