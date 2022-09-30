<template>
  <div class="w-full text-14px">
    <PiIcon @click="toggleVisible()"><CodeSSlashLine></CodeSSlashLine></PiIcon>
    <div v-show="codeVisible">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core'

const [codeVisible, toggleVisible] = useToggle(false)
</script>
