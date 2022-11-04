import { PropType, ExtractPropTypes } from 'vue'
import { Size } from '@/types'
import { ButtonProps } from './button'

export const buttonGroupProps = {
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export const buttonContextKey = Symbol('buttonGroup')

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export const filterPropsWithGroup = (props: ButtonProps, config?: ButtonGroupProps): ButtonProps => {
  if (!config) return props
  return {
    ...props,
    disabled: config.disabled ?? props.disabled,
    size: config.size ?? props.size
  }
}
