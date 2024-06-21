import { GlobalStyles } from '@/GlobalStyles'
import { JSX, ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import media from 'styled-media-query'
import NavigationBar from './NavigationBar'

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavigationBar />
        <Main>{children}</Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  margin-top: 100px;
  padding: 0 2em;
  ${media.lessThan('small')`
    margin-top: 100px;
  `}
`
