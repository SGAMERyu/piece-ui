<template>
  <component
    :is="as"
    class="pi-btn"
    :class="[
      ds(size, !!size),
      ds('disabled', disabled),
      ds('rounded', !!rounded),
      ds(color, COLORS.includes(color))
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { buttonProps, COLORS } from './button'
import { addDynamicClass } from '../../../utils'

defineOptions({
  name: 'PiButton'
})

defineProps(buttonProps)
const ds = addDynamicClass('pi-btn')
</script>
