import { Rule, RuleContext } from 'unocss'
import { PieceUiPresetTheme } from '../theme/type'
import { upperFirst } from 'scule'

export const buttonShortCuts = {
  'pi-btn': 'flex items-center border-none outline-none focus:outline-none cursor-pointer text-primaryContrast',
  'pi-btn--disabled': 'text-font-disabled bg-disabled font-bold',
  'pi-btn--rounded': 'rounded-full',
  'pi-btn--primary': 'bg-primary',
  'pi-btn-info': 'bg-info',
  'pi-btn-outline': 'bg-transparent border-solid border-1px border-primary'
}

export const buttonRule: Rule[] = [
  [
    /^pi-btn--(xs|sm|md|lg|xl)$/,
    ([, size]: string[], { theme }: RuleContext<PieceUiPresetTheme>) => {
      const height = theme?.piButton?.[size]
      const paddingX = theme?.piButton?.[`padding${upperFirst(size)}`]
      const fontSize = theme?.fontSize?.[size] as any as string
      return { height, padding: `0px ${paddingX}`, 'font-size': fontSize }
    }
  ],
  [
    /^pi-btn--radius--(xs|sm|md|lg|xl)$/,
    ([, size]: string[], { theme }: RuleContext<PieceUiPresetTheme>) => {
      const radius = theme?.piButton?.[`radius${upperFirst(size)}`]
      return { 'border-radius': radius }
    }
  ]
]

export const buttonSafeList = [
  ...['xs', 'sm', 'md', 'lg', 'xl'].map((size) => `pi-btn--${size}`),
  ...['primary', 'success', 'warn', 'danger'].map((color) => `pi-btn--${color}`),
  'pi-btn--disabled',
  'pi-btn--rounded',
  'pi-btn-outline'
]
