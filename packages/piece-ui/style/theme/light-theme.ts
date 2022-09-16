import type { ConfigTokens, PinceauTokens } from 'pinceau'
import { convertThemeMapToTokenMap } from '../generate'
import { infoLightColor } from './colors/info'
import { primaryLightColor } from './colors/primary'
import { successLightColor } from './colors/success'
import { warningLightColor } from './colors/warning'
import commonTheme from './common'

const lightTheme: ConfigTokens & PinceauTokens = {
  colors: {
    ...commonTheme.colors,
    ...convertThemeMapToTokenMap(primaryLightColor),
    ...convertThemeMapToTokenMap(infoLightColor),
    ...convertThemeMapToTokenMap(successLightColor),
    ...convertThemeMapToTokenMap(warningLightColor)
  },
  size: {
    ...commonTheme.size
  }
}

export default lightTheme
