import 'styled-components'

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryLight: string
            primaryDark: string
            secondary: string
            secondaryDark: string
            input: string
            body: string
            text: string
            success: string
            danger: string
            impression: string
        }
    }
}
