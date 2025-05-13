import 'styled-components/native'
import 'styled-components'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string
      GREEN_700: string
      GREEN_500: string
      RED: string
      RED_DARK: string
      GRAY_700: string
      GRAY_600: string
      GRAY_500: string
      GRAY_400: string
      GRAY_300: string
      GRAY_200: string
      GRAY_100: string
    }
    FONT_FAMILY: {
      REGULAR: string
      BOLD: string
    }
    FONT_SIZE: {
      SM: string
      MD: string
      LG: string
      XL: string
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string
      GREEN_700: string
      GREEN_500: string
      RED: string
      RED_DARK: string
      GRAY_700: string
      GRAY_600: string
      GRAY_500: string
      GRAY_400: string
      GRAY_300: string
      GRAY_200: string
      GRAY_100: string
    }
    FONT_FAMILY: {
      REGULAR: string
      BOLD: string
    }
    FONT_SIZE: {
      SM: string
      MD: string
      LG: string
      XL: string
    }
  }
}
