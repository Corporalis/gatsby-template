import { GlobalStyles } from '@/GlobalStyles'
import { JSX, ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import media from 'styled-media-query'
import { theme } from '../theme'
import NavigationBar from './NavigationBar'
import { SiteFooter } from './SiteFooter'

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationBar />
      <Main>{children}</Main>
      <SiteFooter></SiteFooter>
    </ThemeProvider>
  )
}

const Main = styled.main`
  margin-top: 8em;
  padding: 0 2em;
  ${media.lessThan('small')`
    margin-top: 8em;
  `}
`
