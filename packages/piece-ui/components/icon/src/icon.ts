import { ExtractPropTypes } from 'vue'
import type Icon from './icon.vue'

export const iconProps = {
  size: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
}
export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>
