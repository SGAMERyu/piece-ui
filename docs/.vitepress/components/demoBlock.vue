<template>
  <div class="flex flex-col w-full min-h-32px relative mt-16px">
    <div class="flex border-light-900 border p-16px">
      <slot name="demo" />
    </div>
    <div class="flex justify-end border-light-900 border p-8px border-t-0px">
      <PiIcon @click="toggleVisible()"><CodeSSlashLine></CodeSSlashLine></PiIcon>
    </div>
    <div v-if="codeVisible">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core'

defineOptions({
  name: 'DemoBlock'
})

const [codeVisible, toggleVisible] = useToggle(false)
</script>
