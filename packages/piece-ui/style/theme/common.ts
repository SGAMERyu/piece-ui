import type { ConfigTokens, PinceauTokens } from 'pinceau'
import { tokenSize } from '../components'
import { neutralsColor } from './colors/neutral'
import { tokenFontSize } from './font'

const normalColor = {
  text: {
    value: neutralsColor[500].value
  },
  white: {
    value: '#ffffff'
  },
  'text-disabled': {
    value: '#9DA7BE'
  },
  disabled: {
    value: '#edf0f8'
  }
}

export const commonTheme: ConfigTokens & PinceauTokens = {
  colors: {
    ...normalColor
  },
  fontSizes: {
    ...tokenFontSize
  },
  size: {
    ...tokenSize
  }
}

export default commonTheme
