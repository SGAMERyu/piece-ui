import { primaryColor, dangerColor, warnColor, successColor, infoColor } from './colors'

export const colors: Record<string, string> = {
  white: '#fff',
  ...primaryColor,
  ...successColor,
  ...warnColor,
  ...dangerColor,
  ...infoColor,
  '--pi-color-font-disabled': '#d3d9e9',
  // disabled color
  '--pi-color-disabled': '#edf0f8'
}

export const themeColors = {
  primary: 'var(--pi-color-primary-500)',
  primaryContrast: 'white',
  // light
  primaryLight: 'var(--pi-color-primary-200)',
  primaryLightHover: 'var(--pi-color-primary-300)', // 悬停状态
  primaryLightActive: 'var(--pi-color-primary-400)', // 按下状态
  primaryLightContrast: 'var(--pi-color-primary-600)',
  // outline
  primaryOutline: 'var(--pi-color-primary-400)',
  primaryOutlineHover: 'var(--pi-color-primary-300)',
  primaryOutlineActive: 'var(--pi-color-primary-500)',
  // subtle
  primarySubtleContrast: 'var(--pi-color-primary-600)',
  primarySubtleHover: 'var(--pi-color-primary-300)',
  disabled: 'var(--pi-color-disabled)',
  fontDisabled: 'var(--pi-color-font-disabled)'
}
