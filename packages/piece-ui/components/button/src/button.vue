<template>
  <PiStyleButton v-bind="filteredProps">
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
  </PiStyleButton>
</template>

<script lang="ts" setup>
import { buttonProps } from './button'
import { buttonContextKey, filterPropsWithGroup } from './button-group'
import { PiIcon } from '@/components/icon'
import PiStyleButton from './styleButton.vue'

defineOptions({
  name: 'PiButton'
})

const props = defineProps(buttonProps)
const groupConfig = inject(buttonContextKey, undefined)

const filteredProps = filterPropsWithGroup(props, groupConfig)
</script>
