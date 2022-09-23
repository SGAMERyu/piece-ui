import { PiButton, PiIcon } from './components'
import { createInstaller } from './utils'
import type {  Plugin } from 'vue'

const components: Plugin[] = [PiButton, PiIcon]

const installPieceUi = createInstaller(components)

export default installPieceUi
