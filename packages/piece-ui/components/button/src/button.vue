<template>
  <button
    class="pi-btn"
    :class="[
      av('disabled', disabled),
      av('full', fullWidth),
      av('rounded', rounded),
      av('circle', circle),
      ds.e(variant, !!variant),
      ds.e(size, !!size),
      ds.m(color, COLORS.includes(color) && variant !== 'default')
    ]"
    :type="nativeType"
    :disabled="disabled"
    :style="gradientStyle"
  >
    <div class="pi-btn-inner">
      <PiIcon v-if="!$slots.startIcon && startIcon" class="pi-btn-leftIcon">
        <component :is="loading ? loadingIcon : startIcon"></component>
      </PiIcon>
      <slot name="startIcon"></slot>

      <span class="pi-btn-label">
        <slot></slot>
      </span>

      <PiIcon v-if="!$slots.endIcon && endIcon" class="pi-btn-rightIcon">
        <component :is="loading ? loadingIcon : endIcon"></component>
      </PiIcon>
      <slot name="endIcon"></slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { buttonProps } from './button'
import { addDynamicClass, addVariantClass } from '@/utils'
import { COLORS } from '@/types'
import { PiIcon } from '@/components/icon'
import { CSSProperties } from 'vue'

defineOptions({
  name: 'PiButton'
})

const props = defineProps(buttonProps)

const av = addVariantClass
const ds = addDynamicClass('pi-btn')

const gradientStyle = computed<CSSProperties>(() => {
  if (props.variant == 'gradient' && props.gradient) {
    const { from, to, deg = 45 } = props.gradient
    return {
      backgroundImage: `linear-gradient(${deg}deg,${from} 0%, ${to} 100%)`
    }
  }
  return {}
})
</script>

<style lang="ts">
css({
  '.pi-btn': {
    '--pi-btn-disabled-bg-color': '{colors.disabled}',
    '--pi-btn-disabled-text-color': '{colors.text-disabled}',
    '--pi-btn-border-color': 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: '1px solid var(--pi-btn-border-color)',
    background: 'transparent',
    cursor: 'pointer',
    color: 'var(--pi-btn-text-color)',
    backgroundColor: 'var(--pi-btn-bg-color)',
    borderRadius: '4px',
    fontWeight: '500',
    variants: {
      disabled: {
        '--pi-btn-border-color': 'transparent',
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
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },
    '&-label': {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },
    '&-leftIcon': {
      marginRight: '10px'
    },
    '&-rightIcon': {
      marginLeft: '10px'
    },
  },
  '.pi-btn-default': {
    '--pi-btn-border-color': '{colors.neutral.200}',
  },
  '.pi-btn-filled': {
    '--pi-btn-border-color': 'transparent',
    '--pi-btn-text-color': '{colors.white}',
    '&.pi-btn--primary': {
      '--pi-btn-bg-color': '{colors.primary.500}'
    },
    '&.pi-btn--info': {
      '--pi-btn-bg-color': '{colors.info.500}'
    },
    '&.pi-btn--warning': {
      '--pi-btn-bg-color': '{colors.warning.500}'
    },
    '&.pi-btn--success': {
      '--pi-btn-bg-color': '{colors.success.500}'
    },
    '&.pi-btn--danger': {
      '--pi-btn-bg-color': '{colors.danger.500}'
    },
  },
  '.pi-btn-light': {
    '--pi-btn-border-color': 'transparent',
    '&.pi-btn--primary': {
      '--pi-btn-text-color': '{colors.primary.500}',
      '--pi-btn-bg-color': '{colors.primary.100}'
    },
    '&.pi-btn--info': {
      '--pi-btn-text-color': '{colors.info.500}',
      '--pi-btn-bg-color': '{colors.info.100}'
    },
    '&.pi-btn--warning': {
      '--pi-btn-text-color': '{colors.warning.500}',
      '--pi-btn-bg-color': '{colors.warning.100}'
    },
    '&.pi-btn--success': {
      '--pi-btn-text-color': '{colors.success.500}',
      '--pi-btn-bg-color': '{colors.success.100}'
    },
    '&.pi-btn--danger': {
      '--pi-btn-text-color': '{colors.danger.500}',
      '--pi-btn-bg-color': '{colors.danger.100}'
    },
  },
  '.pi-btn-outline': {
    '--pi-btn-bg-color': 'transparent',
    '&.pi-btn--primary': {
      '--pi-btn-border-color': '{colors.primary.300}',
      '--pi-btn-text-color': '{colors.primary.500}'
    },
    '&.pi-btn--info': {
      '--pi-btn-border-color': '{colors.info.300}',
      '--pi-btn-text-color': '{colors.info.500}'
    },
    '&.pi-btn--warning': {
      '--pi-btn-border-color': '{colors.warning.300}',
      '--pi-btn-text-color': '{colors.warning.500}'
    },
    '&.pi-btn--success': {
      '--pi-btn-border-color': '{colors.success.300}',
      '--pi-btn-text-color': '{colors.success.500}'
    },
    '&.pi-btn--danger': {
      '--pi-btn-border-color': '{colors.danger.300}',
      '--pi-btn-text-color': '{colors.danger.500}'
    },
  },
  '.pi-btn-subtle': {
    '--pi-btn-bg-color': 'transparent',
    '&.pi-btn--primary': {
      '--pi-btn-text-color': '{colors.primary.500}'
    },
    '&.pi-btn--info': {
      '--pi-btn-text-color': '{colors.info.500}'
    },
    '&.pi-btn--warning': {
      '--pi-btn-text-color': '{colors.warning.500}'
    },
    '&.pi-btn--success': {
      '--pi-btn-text-color': '{colors.success.500}'
    },
    '&.pi-btn--danger': {
      '--pi-btn-text-color': '{colors.danger.500}'
    },
  },
  '.pi-btn-gradient': {
    '--pi-btn-text-color': '{colors.white}',
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
})
</style>
