import 'bootstrap/dist/css/bootstrap.min.css'
import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    background-repeat: no-repeat;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-x: hidden;
    -ms-overflow-style: scrollbar;
    scroll-behavior: smooth;
  }

  body,
  html {
    font-size: 1rem;
    -webkit-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.body};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 2;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
  }

  ${media.greaterThan('small')`
    body {
      line-height: 1.8em;
    }
  `}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin-top:0;
    margin-bottom: 3.4rem;
    color: #FFF;
  }
  ${media.greaterThan('large')`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 3rem;
    }
  `}

  a {
    color: #FFF;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
    &:visited {
      color: #fffffe;
    }
  }

  .accept-consent-btn {
    border: 0;
    border-radius: 2rem!important;
    cursor: pointer;
    font-size: 0.87rem;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    line-height: inherit;
    white-space: nowrap;
    overflow: hidden;
    padding: 0.3rem 1.5rem!important;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.input}!important;
    color: ${({ theme }) => theme.colors.primaryDark}!important;
    margin: 1em;
    display: block;
    ${media.greaterThan('small')`
      display: flex;
      flex: 1 0 1;
    `}
  }
`
