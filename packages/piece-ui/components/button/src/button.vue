<template>
  <button
    class="pi-btn"
    :class="[
      av('disabled', disabled),
      av('full', fullWidth),
      av('rounded', rounded),
      av('circle', circle),
      ds.e(size, !!size),
      ds.m(color, COLORS.includes(color))
    ]"
    :type="nativeType"
    :disabled="disabled"
  >
    <div class="pi-btn-inner">
      <slot></slot>
      <div>
        <Pi-icon>
          <component :is="loadingIcon"></component>
        </Pi-icon>
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { buttonProps } from './button'
import { addDynamicClass, addVariantClass } from '@/utils'
import { COLORS } from '@/types'

defineOptions({
  name: 'PiButton'
})

defineProps(buttonProps)
const av = addVariantClass
const ds = addDynamicClass('pi-btn')
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
      full: {
        width: '100%'
      },
      rounded: {
        borderRadius: '999px'
      },
      circle: {
        width: 'var(--pi-btn-size-width)',
        padding: '0',
        borderRadius: '50%'
      }
    },
    '&-inner': {
      display: 'flex'
    }
  },
  '.pi-btn-xs': {
    '--pi-btn-size-width': '{size.btn.xs}',
    height: '{size.btn.xs}',
    fontSize: '{fontSizes.xs}',
    padding: '0px {size.btn-padding.xs}',
  },
  '.pi-btn-sm': {
    '--pi-btn-size-width': '{size.btn.sm}',
    height: '{size.btn.sm}',
    fontSize: '{fontSizes.sm}',
    padding: '0px {size.btn-padding.sm}',
  },
  '.pi-btn-md': {
    '--pi-btn-size-width': '{size.btn.md}',
    height: '{size.btn.md}',
    fontSize: '{fontSizes.md}',
    padding: '0px {size.btn-padding.md}',
  },
  '.pi-btn-lg': {
    '--pi-btn-size-width': '{size.btn.lg}',
    height: '{size.btn.lg}',
    fontSize: '{fontSizes.lg}',
    padding: '0px {size.btn-padding.lg}',
  },
  '.pi-btn-xl': {
    '--pi-btn-size-width': '{size.btn.xl}',
    height: '{size.btn.xl}',
    fontSize: '{fontSizes.xl}',
    padding: '0px {size.btn-padding.xl}',
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
