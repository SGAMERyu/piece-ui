<template>
  <component :is="as" class="pi-btn">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { ButtonProps, buttonProps } from './button'
import { variantTypeHover } from './button-style'

defineOptions({
  name: 'PiStyleButton'
})

defineProps({ ...buttonProps, ...variants })
</script>

<style lang="ts">
css({
  '.pi-btn': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    background: 'transparent',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: '500',
    border: 'none',
    '&:hover': {
      backgroundColor: (props) => variantTypeHover(props as ButtonProps)
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
  variants: {
    disabled: {
      true: {
        color: '{colors.text-disabled}',
        backgroundColor: '{colors.disabled}',
        cursor: 'not-allowed'
      }
    },
    variant: {
      default: {
        color: '{colors.neutral.500}',
        border: '1px solid {colors.neutral.200}',
        backgroundColor: 'transparent'
      },
      gradient: {
        color: '{colors.white}',
        backgroundImage: (props) => {
          if (props.variant == 'gradient' && props.gradient) {
            const { from, to, deg = 45 } = props.gradient
            return `linear-gradient(${deg}deg,${from} 0%, ${to} 100%)`
          }
          return 'none'
        }
      },
      filled: {
        color: '{colors.white}',
        backgroundColor: (props) => `{colors.${props.color}.500}`
      },
      light: {
        color:(props) => `{colors.${props.color}.500}`,
        backgroundColor: (props) => `{colors.${props.color}.100}`
      },
      outline: {
        border: (props) => `1px solid {colors.${props.color}.300}`,
        color: (props) => `{colors.${props.color}.500}`,
        backgroundColor: 'transparent'
      },
      subtle: {
        color: (props) => `{colors.${props.color}.500}`,
        backgroundColor: 'transparent'
      },
      options: {
        default: 'filled'
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    rounded: {
      true: {
        borderRadius: '999px'
      }
    },
    circle: {
      true: {
        width: (props) => {
          return `{size.btn.${props.size}}`
        },
        padding: '0',
        borderRadius: '50%'
      }
    },
    size: {
      xs: {
        height: '{size.btn.xs}',
        fontSize: '{fontSizes.xs}',
        padding: '0px {size.btn-padding.xs}',
      },
      sm: {
        height: '{size.btn.sm}',
        fontSize: '{fontSizes.sm}',
        padding: '0px {size.btn-padding.sm}',
      },
      md: {
        height: '{size.btn.md}',
        fontSize: '{fontSizes.md}',
        padding: '0px {size.btn-padding.md}',
      },
      lg: {
        height: '{size.btn.lg}',
        fontSize: '{fontSizes.lg}',
        padding: '0px {size.btn-padding.lg}',
      },
      xl: {
        height: '{size.btn.xl}',
        fontSize: '{fontSizes.xl}',
        padding: '0px {size.btn-padding.xl}',
      },
      options: {
        default: 'md'
      }
    }
  },
})
</style>
