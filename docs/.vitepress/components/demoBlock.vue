<template>
  <div class="flex items-center shadow w-full min-h-32px relative p-16px">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DemoBlock'
})
</script>
