import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
  }
  * {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-image: url('images/dextest.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;


  img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
