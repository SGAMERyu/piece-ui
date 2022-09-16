import { PropType, ExtractPropTypes } from 'vue'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorType = 'primary' | 'warn' | 'success' | 'danger'
export type Color = string | ColorType

export const COLORS = ['primary', 'warn', 'success', 'danger']

export const buttonProps = {
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  as: {
    type: String,
    default: 'button'
  },
  rounded: {
    type: Boolean
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  disabled: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>