import type { Theme } from '@unocss/preset-mini'

interface PieceUiTheme {
  pieceUiPreflightBase: Record<string, string>
  piButton: Record<string, string>
}

export type PieceUiPresetTheme = Theme & Partial<PieceUiTheme>
