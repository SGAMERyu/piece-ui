import { PropType, ExtractPropTypes, ButtonHTMLAttributes } from 'vue'
import { Color, Size } from '@/types'
import type Button from './button.vue'
import { ThemeKey } from 'pinceau'

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
export type ButtonInstance = InstanceType<typeof Button>
