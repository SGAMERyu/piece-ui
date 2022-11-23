import { Color, Size } from '@/types'
import { CSS, PinceauTheme } from 'pinceau/index'
import { cssProp } from 'pinceau/runtime'
import type { PropType, ExtractPropTypes } from 'vue'

export type ButtonVariant = 'light' | 'outline' | 'subtle' | 'filled' | 'default' | 'gradient'

export interface Gradient {
  from: string
  to: string
  deg?: number
}

export const buttonStyleProps = {
  as: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled'
  },
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean
  },
  circle: {
    type: Boolean,
    default: false
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  gradient: {
    type: Object as PropType<Gradient>
  },
  disabled: {
    type: Boolean,
    default: false
  },
  css: cssProp
}

export type ButtonStyleProps = ExtractPropTypes<typeof buttonStyleProps>

export function variantTypeHover(props: ButtonStyleProps) {
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

export function getCssColors(props: ButtonStyleProps): CSS<PinceauTheme> {
  if (props.disabled) {
    return {
      color: '{colors.text-disabled}',
      backgroundColor: '{colors.disabled}',
      cursor: 'not-allowed',
      '&:hover': {
        color: '{colors.text-disabled}',
        backgroundColor: '{colors.disabled}'
      },
      '.pi-btn-inner': {
        color: '{colors.text-disabled}'
      }
    }
  }

  return {}
}
