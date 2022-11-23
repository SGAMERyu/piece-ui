import { defineTheme } from 'pinceau'
import commonTheme from './theme/common'
import lightTheme from './theme/light-theme'
import defu from 'defu'

const theme = defu(commonTheme, lightTheme)

export default defineTheme(theme)
