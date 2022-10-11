import { PiButton, PiIcon, PiButtonGroup } from './components'
import { createInstaller } from './utils'
import type {  Plugin } from 'vue'

const components: Plugin[] = [PiButton, PiIcon, PiButtonGroup]

const installPieceUi = createInstaller(components)

export default installPieceUi
