import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // You can continue writing global styles here
  body {
    background-color:#f4f4f4;
   font-size: 16px;
  }
  .container{
    max-width: 1056px;
  }
`
