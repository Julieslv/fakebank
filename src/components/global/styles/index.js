import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  // You can continue writing global styles here
  body {
    background-color:#f4f4f4;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  .container{
    max-width: 1056px;
    margin: 0 auto;
    padding: 0 24px;
  }
`
