import type { ConfigTokens, PinceauTokens } from 'pinceau'
import { infoLightColor } from './colors/info'
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
