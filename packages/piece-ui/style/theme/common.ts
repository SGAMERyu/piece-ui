import type { ConfigTokens, PinceauTokens } from 'pinceau'
import { tokenSize } from '../components'
import { tokenFontSize } from './font'

const neutralsColor = {
  text: {
    value: '#2D3546'
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
    ...neutralsColor
  },
  fontSizes: {
    ...tokenFontSize
  },
  size: {
    ...tokenSize
  }
}

export default commonTheme
