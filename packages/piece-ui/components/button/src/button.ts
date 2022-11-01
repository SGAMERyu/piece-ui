import { PropType, ExtractPropTypes, ButtonHTMLAttributes, Component } from 'vue'
import { Color, Size } from '@/types'
import type Button from './button.vue'
import { LoaderFourFill } from '@piece-ui/icon'

export type ButtonVariant = 'light' | 'outline' | 'subtle' | 'filled' | 'default' | 'gradient'
export interface Gradient {
  from: string
  to: string
  deg?: number
}

export const defaultGradientDeg = '45deg'

export const buttonProps = {
  as: {
    type: String,
    default: 'button'
  },
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
    type: Object as PropType<Component>,
    default: () => LoaderFourFill
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
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled'
  },
  gradient: {
    type: Object as PropType<Gradient>
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>

export function variantTypeHover(props: ButtonProps): any {
  const { variant } = props
  if (variant === 'filled') {
    return `{colors.${props.color}.400}`
  }
  if (variant === 'light') {
    return `{colors.${props.color}.200}`
  }
  if (variant === 'outline') {
    return `{colors.${props.color}.100}`
  }
  if (variant === 'subtle') {
    return `{colors.${props.color}.100}`
  }
  return {}
}
