<template>
  <component
    :is="as"
    class="pi-btn"
    :class="[
      ds.e(size, !!size),
      ds.m('disabled', disabled),
      ds.e('rounded', !!rounded),
      ds.m(color, COLORS.includes(color)),
      ds.e('block', !!block),
      ds.e('circle', !!circle)
    ]"
    :type="isAsButton && nativeType"
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

const props = defineProps(buttonProps)
const ds = addDynamicClass('pi-btn')

const isAsButton = computed(() => {
  return props.as === 'button'
})
</script>

<style lang="ts">
css({
  '.pi-btn': {
    display: 'flex',
    alignItems: 'center',
    color: '{colors.pi-white}',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer'
  },
  '.pi-btn--disabled': {
    background: '{colors.pi-disabled}',
    color: '{colors.pi-text-disabled}'
  },
  '.pi-btn-block': {
    width: '100%'
  },
  '.pi-btn-xs': {
    height: '{size.pi-btn-xs}',
    fontSize: '{fontSizes.pi-font-xs}',
    padding: '0px {size.pi-btn-padding-xs}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.pi-btn-xs}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-sm': {
    height: '{size.pi-btn-sm}',
    fontSize: '{fontSizes.pi-font-sm}',
    padding: '0px {size.pi-btn-padding-sm}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.pi-btn-sm}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-md': {
    height: '{size.pi-btn-md}',
    fontSize: '{fontSizes.pi-font-md}',
    padding: '0px {size.pi-btn-padding-md}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.pi-btn-md}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-lg': {
    height: '{size.pi-btn-lg}',
    fontSize: '{fontSizes.pi-font-lg}',
    padding: '0px {size.pi-btn-padding-lg}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.pi-btn-lg}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-xl': {
    height: '{size.pi-btn-xl}',
    fontSize: '{fontSizes.pi-font-xl}',
    padding: '0px {size.pi-btn-padding-xl}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.pi-btn-xl}',
      borderRadius: '50%'
    },
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
