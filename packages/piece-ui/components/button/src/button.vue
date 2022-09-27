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
import { buttonProps } from './button'
import { addDynamicClass } from '@/utils'
import { COLORS } from '@/types'

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
    color: '{colors.white}',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer'
  },
  '.pi-btn--disabled': {
    background: '{colors.disabled}',
    color: '{colors.text-disabled}'
  },
  '.pi-btn-block': {
    width: '100%'
  },
  '.pi-btn-xs': {
    height: '{size.btn.xs}',
    fontSize: '{fontSizes.xs}',
    padding: '0px {size.btn-padding.xs}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.btn.xs}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-sm': {
    height: '{size.btn.sm}',
    fontSize: '{fontSizes.sm}',
    padding: '0px {size.btn-padding.sm}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.btn.sm}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-md': {
    height: '{size.btn.md}',
    fontSize: '{fontSizes.font.md}',
    padding: '0px {size.btn-padding.md}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.btn.md}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-lg': {
    height: '{size.btn.lg}',
    fontSize: '{fontSizes.lg}',
    padding: '0px {size.btn-padding.lg}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.btn.lg}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-xl': {
    height: '{size.btn.xl}',
    fontSize: '{fontSizes.xl}',
    padding: '0px {size.btn-padding.xl}',
    '&.pi-btn-circle': {
      padding: '0',
      width: '{size.btn.xl}',
      borderRadius: '50%'
    },
  },
  '.pi-btn-rounded': {
    borderRadius: '999px'
  },
  '.pi-btn--primary': {
    background: '{colors.primary.500}'
  },
  '.pi-btn--info': {
    background: '{colors.info.500}'
  },
  '.pi-btn--warning': {
    background: '{colors.warning.500}'
  },
  '.pi-btn--success': {
    background: '{colors.success.500}'
  }
})
</style>
