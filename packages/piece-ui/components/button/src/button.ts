import { PropType, ExtractPropTypes, Component } from 'vue'
import { cssProp } from 'pinceau/runtime'
import type Button from './button.vue'
import { PiLoader4Fill } from '@piece-ui/icon'
import { buttonStyleProps, ButtonStyleProps } from './button-style'

export const buttonProps = {
  ...buttonStyleProps,
  loading: {
    type: Boolean,
    default: false
  },
  loadingIcon: {
    type: Object as PropType<Component>,
    default: () => PiLoader4Fill
  },
  startIcon: {
    type: Object as PropType<Component>
  },
  endIcon: {
    type: Object as PropType<Component>
  },
  loadingPosition: {
    type: String as PropType<'right' | 'left'>,
    default: 'left'
  },
  startIconCss: cssProp,
  endIconCss: cssProp,
  labelCss: cssProp
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps> & ButtonStyleProps
export type ButtonInstance = InstanceType<typeof Button>
