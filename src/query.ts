import { css } from 'styled-components'
import { Styles } from 'styled-components/dist/types'

export interface DefaultBreakpoints {
    huge: string
    large: string
    medium: string
    small: string
}

export const defaultBreakpoints: DefaultBreakpoints = {
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '450px',
}

export const media = {
    greaterThan: (device: keyof DefaultBreakpoints) => (styles: Styles<object>) => css`
    @media (min-width: ${defaultBreakpoints[device]}) {
      ${css(styles)};
    }
  `,
    lessThan: (device: keyof DefaultBreakpoints) => (styles: Styles<object>) => css`
    @media (max-width: ${defaultBreakpoints[device]}) {
      ${css(styles)};
    }`,

    between: (firstBreakpoint: keyof DefaultBreakpoints, secondBreakpoint: keyof DefaultBreakpoints) => (styles: Styles<object>) => css`
    @media (min-width: ${defaultBreakpoints[firstBreakpoint]}) and
      (max-width: ${defaultBreakpoints[secondBreakpoint]}) {
      ${css(styles)}
    }
  `
}