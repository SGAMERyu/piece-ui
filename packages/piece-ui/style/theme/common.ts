import type { ConfigTokens, PinceauTokens } from 'pinceau'
import { tokenSize } from '../components'
import { convertThemeMapToTokenMap } from '../generate'

const neutralsColor = {
  'pi-text': '#2D3546',
  'pi-white': '#fffff',
  'pi-text-disabled': '#9DA7BE',
  'pi-disabled': '#edf0f8'
}

export const commonTheme: ConfigTokens & PinceauTokens = {
  colors: {
    ...convertThemeMapToTokenMap(neutralsColor)
  },
  size: {
    ...tokenSize
  }
}

export default commonTheme
