<template>
  <div class="pi-btn-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { buttonContextKey, buttonGroupProps } from './button-group'
defineOptions({
  name: 'PiButtonGroup'
})

const props = defineProps({ ...buttonGroupProps, ...variants })

provide(
  buttonContextKey,
  reactive({
    size: toRef(props, 'size'),
    disabled: toRef(props, 'disabled')
  })
)
</script>

<style lang="ts">
css({
  '.pi-btn-group': {
    'display': "flex",
      '& .pi-btn:not(:last-child)': {
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px'
      },
      '& .pi-btn:not(:first-child)': {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px'
      },
      '& .pi-btn:first-child': {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px'
      },
      '& .pi-btn:last-child': {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
      }
  },
  variants: {
    vertical: {
      true: {
        'flexDirection': 'column',
      },
    }
  }
})
</style>
