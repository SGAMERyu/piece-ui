<template>
  <component
    :is="as"
    class="pi-btn"
    :class="[
      ds.e(size, !!size),
      ds.m('disabled', disabled),
      ds.e('rounded', !!rounded),
      ds.m(color, COLORS.includes(color))
    ]"
    :disabled="disabled"
  >
    <slot>{{ $props }}</slot>
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

<style lang="ts">
css({
  '.pi-btn': {
    display: 'flex',
    alignItems: 'center',
    color: '{colors.pi-white}',
    outline: 'none',
    border: 'none',
    background: 'transparent'
  },
  '.pi-btn--disabled': {
    background: '{colors.pi-disabled}',
    color: '{colors.pi-text-disabled}'
  },
  '.pi-btn-xs': {
    height: '{size.pi-btn-xs}',
    padding: '0px {size.pi-btn-padding-xs}'
  },
  '.pi-btn-sm': {
    height: '{size.pi-btn-sm}',
    padding: '0px {size.pi-btn-padding-sm}'
  },
  '.pi-btn-md': {
    height: '{size.pi-btn-md}',
    padding: '0px {size.pi-btn-padding-md}'
  },
  '.pi-btn-lg': {
    height: '{size.pi-btn-lg}',
    padding: '0px {size.pi-btn-padding-lg}'
  },
  '.pi-btn-xl': {
    height: '{size.pi-btn-xl}',
    padding: '0px {size.pi-btn-padding-xl}'
  },
  '.pi-btn-rounded': {
    borderRadius: '999px'
  },
  '.pi-btn--primary': {
    background: '{colors.pi-primary-500}'
  },
  '.pi-btn--info': {
    background: '{colors.pi-info-500}'
  },
  '.pi-btn--warn': {
    background: '{colors.pi-warning-500}'
  },
  '.pi-btn--success': {
    background: '{colors.pi-success-500}'
  }
})
</style>
