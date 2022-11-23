import { palette } from '../../utils'
import { tokenSize, componentUtils } from '../components'
import { tokenFontSize } from './font'

const defaultTokens = {
  fontSizes: {
    ...tokenFontSize
  },
  size: {
    ...tokenSize
  }
}

const defaultUtils = {
  ...componentUtils
}

const defaultColors = {
  // misc
  white: '#ffffff',
  black: '#000000',
  // brand
  primary: palette('blue'),
  danger: palette('red'),
  warning: palette('yellow'),
  success: palette('green'),
  info: palette('indigo')
}

export default {
  ...defaultTokens,
  colors: defaultColors,
  utils: defaultUtils
}
