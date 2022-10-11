import { withInstall } from '@/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/buttonGroup.vue'

export const PiButton = withInstall(Button)
export const PiButtonGroup = withInstall(ButtonGroup)
export default PiButton

export * from './src/button'
