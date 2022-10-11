import type { ConfigTokens, PinceauTokens } from 'pinceau'
import { dangerLightColor } from './colors/danger'
import { infoLightColor } from './colors/info'
import { neutralsColor } from './colors/neutral'
import { primaryLightColor } from './colors/primary'
import { successLightColor } from './colors/success'
import { warningLightColor } from './colors/warning'
import commonTheme from './common'

const lightTheme: ConfigTokens & PinceauTokens = {
  colors: {
    ...commonTheme.colors,
    primary: {
      ...primaryLightColor
    },
    info: {
      ...infoLightColor
    },
    success: {
      ...successLightColor
    },
    warning: {
      ...warningLightColor
    },
    danger: {
      ...dangerLightColor
    },
    neutral: {
      ...neutralsColor
    }
  },
  size: {
    ...commonTheme.size
  },
  fontSizes: {
    ...commonTheme.fontSizes
  }
}

export default lightTheme
