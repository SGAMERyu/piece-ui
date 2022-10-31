import { PropType, ExtractPropTypes } from 'vue'
import { Size } from '@/types'

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

export const buttonContextKey = Symbol('key')

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
