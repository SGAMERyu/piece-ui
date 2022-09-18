import { PropType, ExtractPropTypes, ButtonHTMLAttributes } from 'vue'

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
  block: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingPosition: {
    type: String as PropType<'right' | 'left'>,
    default: 'left'
  },
  nativeType: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: undefined
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
