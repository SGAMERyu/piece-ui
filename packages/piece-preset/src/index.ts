import type { Preset } from 'unocss'
import { colors, themeColors, fonts, themeFonts, buttonSize, themeButtonSize } from './theme'
import { theme as unoTheme } from '@unocss/preset-mini'
import { rules } from '@unocss/preset-mini/rules'
import { PieceRules, PieceSafeList, PieceShortCuts } from './components/'
import { mergeDeep, entriesToCss } from 'unocss'
import { PieceUiPresetTheme } from './theme/type'

export function presetPiece(): Preset {
  return {
    name: '@piece-ui/preset',
    theme: mergeDeep<PieceUiPresetTheme>(unoTheme, {
      colors: {
        ...themeColors
      },
      fontSize: {
        ...(themeFonts as any)
      },
      piButton: {
        ...themeButtonSize
      },
      pieceUiPreflightBase: {
        ...colors,
        ...fonts,
        ...buttonSize
      }
    }),
    preflights: [
      {
        layer: 'preflights',
        getCSS: (ctx: any) => {
          if (ctx.theme.pieceUiPreflightBase) {
            const css = entriesToCss(Object.entries(ctx.theme.pieceUiPreflightBase))
            return `
            :root {
              ${css}
            }
          `
          }
        }
      }
    ],
    shortcuts: {
      ...PieceShortCuts
    },
    rules: [...(rules as any), ...PieceRules],
    safelist: PieceSafeList,
    variants: [
      (input: string) => {
        const prefix = 'pi-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: (input) => `[disabled] ${input}, ${input}[disabled]`
          }
        }
      }
    ]
  }
}
