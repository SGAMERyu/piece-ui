import { PropType, ExtractPropTypes, ButtonHTMLAttributes, Component } from 'vue'
import { Color, Size } from '@/types'
import type Button from './button.vue'
import { LoaderLine } from '@piece-ui/icon'

export const buttonProps = {
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  rounded: {
    type: Boolean
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingIcon: {
    type: String as PropType<Component>,
    default: () => LoaderLine
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
  disabled: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
