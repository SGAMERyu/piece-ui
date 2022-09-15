import { Rule } from 'unocss'
import { buttonRule, buttonSafeList, buttonShortCuts } from './button'

export const PieceShortCuts: Record<string, string> = {
  ...buttonShortCuts
}
export const PieceRules: Rule[] = [...buttonRule]
export const PieceSafeList: string[] = [...buttonSafeList]
