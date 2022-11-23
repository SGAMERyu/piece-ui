<template>
  <i v-bind="$attrs" :style="style" class="pi-icon">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'
import { COLORS } from '~/types'
import { addCssVarStyle } from '~/utils'

defineOptions({
  name: 'PiIcon',
  inheritAttrs: false
})

const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  const { color, size } = props
  return {
    fill: COLORS.includes(color) ? addCssVarStyle('colors', `${color}-500`) : color,
    width: size,
    height: size
  }
})
</script>

<style lang="ts">
css({
  '.pi-icon': {
    '& svg': {
      width: '1em',
      height: '1em'
    }
  }
})
</style>
