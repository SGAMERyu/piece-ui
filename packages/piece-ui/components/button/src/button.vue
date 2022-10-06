<template>
  <component
    :is="as"
    class="pi-btn"
    :class="[
      av('disabled', disabled),
      av('block', block),
      av('rounded', rounded),
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
import { addDynamicClass, addVariantClass } from '@/utils'
import { COLORS } from '@/types'

defineOptions({
  name: 'PiButton'
})

const props = defineProps(buttonProps)
const av = addVariantClass
const ds = addDynamicClass('pi-btn')

const isAsButton = computed(() => {
  return props.as === 'button'
})
</script>

<style lang="ts">
css({
  '.pi-btn': {
    '--pi-btn-disabled-bg-color': '{colors.disabled}',
    '--pi-btn-disabled-text-color': '{colors.text-disabled}',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: 'var(--pi-btn-text-color)',
    backgroundColor: 'var(--pi-btn-bg-color)',
    variants: {
      disabled: {
        background: 'var(--pi-btn-disabled-bg-color)',
        color: 'var(--pi-btn-disabled-text-color)',
        'cursor': 'not-allowed'
      },
      block: {
        width: '100%'
      },
      rounded: {
        borderRadius: '999px'
      }
    }
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
    fontSize: '{fontSizes.md}',
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

  '.pi-btn--primary': {
    '--pi-btn-text-color': '{colors.white}',
    '--pi-btn-bg-color': '{colors.primary.500}'
  },
  '.pi-btn--info': {
    '--pi-btn-text-color': '{colors.white}',
    '--pi-btn-bg-color': '{colors.info.500}'
  },
  '.pi-btn--warning': {
    '--pi-btn-text-color': '{colors.white}',
    '--pi-btn-bg-color': '{colors.warning.500}'
  },
  '.pi-btn--success': {
    '--pi-btn-text-color': '{colors.white}',
    '--pi-btn-bg-color': '{colors.success.500}'
  },
  '.pi-btn--danger': {
    '--pi-btn-text-color': '{colors.white}',
    '--pi-btn-bg-color': '{colors.danger.500}'
  },
})
</style>
