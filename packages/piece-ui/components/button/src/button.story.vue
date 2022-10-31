<template>
  <Story
    title="button"
    :layout="{
      type: 'grid',
      width: 'auto'
    }"
  >
    <Variant title="baseButton" :init-state="initState">
      <template #default="{ state }">
        <div class="demo-flex">
          <PiButton color="primary" :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton color="info" :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton color="success" :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton color="warning" :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton color="danger" :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton variant="default" :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton disabled :rounded="state.rounded" :full-width="state.circle">button</PiButton>
          <PiButton
            variant="gradient"
            :rounded="state.rounded"
            :full-width="state.circle"
            :gradient="{ from: '#ff9a9e', to: '#fad0c4' }"
            >button</PiButton
          >
        </div>
        <div class="demo-flex">
          <PiButton size="xs">button</PiButton>
          <PiButton size="sm">button</PiButton>
          <PiButton size="md">button</PiButton>
          <PiButton size="lg">button</PiButton>
          <PiButton size="xl">button</PiButton>
        </div>
        <div class="demo-flex">
          <PiButton color="primary" variant="light">button</PiButton>
          <PiButton color="info" variant="light">button</PiButton>
          <PiButton color="warning" variant="light">button</PiButton>
          <PiButton color="danger" variant="light">button</PiButton>
          <PiButton color="success" variant="light">button</PiButton>
        </div>
        <div class="demo-flex">
          <PiButton color="primary" variant="outline">button</PiButton>
          <PiButton color="info" variant="outline">button</PiButton>
          <PiButton color="warning" variant="outline">button</PiButton>
          <PiButton color="danger" variant="outline">button</PiButton>
          <PiButton color="success" variant="outline">button</PiButton>
        </div>
        <div class="demo-flex">
          <PiButton color="primary" variant="subtle">button</PiButton>
          <PiButton color="info" variant="subtle">button</PiButton>
          <PiButton color="warning" variant="subtle">button</PiButton>
          <PiButton color="danger" variant="subtle">button</PiButton>
          <PiButton color="success" variant="subtle">button</PiButton>
        </div>

        <PiButtonGroup>
          <PiButton>button</PiButton>
          <PiButton>button</PiButton>
          <PiButton>button</PiButton>
        </PiButtonGroup>
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import PiButton from './button.vue'
import PiButtonGroup from './buttonGroup.vue'

function initState() {
  return {
    rounded: false,
    circle: false
  }
}
</script>

<style lang="scss">
.demo-flex {
  display: flex;
  margin-bottom: 16px;
  & button {
    margin-left: 8px;
    &:first {
      margin-left: 0px;
    }
  }
}
</style>
