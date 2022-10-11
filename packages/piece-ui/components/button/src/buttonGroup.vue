<template>
  <div class="pi-btn-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'PiButtonGroup'
})
</script>

<style lang="ts">
css({
    '.pi-btn-group': {
        'display': "flex",
    }
})
</style>
