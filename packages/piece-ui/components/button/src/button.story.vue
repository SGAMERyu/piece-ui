<template>
  <Story
    title="button"
    :layout="{
      type: 'grid',
      width: 'auto'
    }"
  >
    <Variant title="color">
      <div class="demo-flex">
        <PiButton color="primary">button</PiButton>
        <PiButton color="info">button</PiButton>
        <PiButton color="success">button</PiButton>
        <PiButton color="warning">button</PiButton>
        <PiButton color="danger">button</PiButton>
        <PiButton disabled>button</PiButton>
      </div>
    </Variant>
    <Variant title="size">
      <div class="demo-flex">
        <PiButton size="xs">button</PiButton>
        <PiButton size="sm">button</PiButton>
        <PiButton>button</PiButton>
        <PiButton size="lg">button</PiButton>
        <PiButton size="xl">button</PiButton>
      </div>
    </Variant>
    <Variant title="rounded">
      <div class="demo-flex">
        <PiButton size="xs" rounded>button</PiButton>
        <PiButton size="sm" rounded>button</PiButton>
        <PiButton rounded>button</PiButton>
        <PiButton size="lg" rounded>button</PiButton>
        <PiButton size="xl" rounded>button</PiButton>
      </div>
    </Variant>
    <Variant title="circle" :state="{}">
      <div class="demo-flex">
        <PiButton size="xs" circle
          ><PiIcon><UploadLine></UploadLine></PiIcon
        ></PiButton>
        <PiButton size="sm" circle
          ><PiIcon><UploadLine></UploadLine></PiIcon
        ></PiButton>
        <PiButton circle
          ><PiIcon><UploadLine></UploadLine></PiIcon
        ></PiButton>
        <PiButton circle size="lg"
          ><PiIcon><UploadLine></UploadLine></PiIcon
        ></PiButton>
        <PiButton circle size="xl"
          ><PiIcon><UploadLine></UploadLine></PiIcon
        ></PiButton>
      </div>
    </Variant>
    <Variant title="block" :state="{}">
      <PiButton full-width>block</PiButton>
    </Variant>
    <Variant title="loading && icon" :state="{}">
      <div class="demo-flex">
        <PiButton :start-icon="UploadFill">upload file</PiButton>
        <PiButton :end-icon="UploadFill">upload file</PiButton>
        <PiButton :start-icon="UploadFill" loading>upload file</PiButton>
        <PiButton :end-icon="UploadFill" loading>upload file</PiButton>
      </div>
    </Variant>
    <Variant title="light">
      <div class="demo-flex">
        <PiButton color="primary" variant="light">button</PiButton>
        <PiButton color="info" variant="light">button</PiButton>
        <PiButton color="success" variant="light">button</PiButton>
        <PiButton color="warning" variant="light">button</PiButton>
        <PiButton color="danger" variant="light">button</PiButton>
      </div>
    </Variant>
    <Variant title="subtle">
      <div class="demo-flex">
        <PiButton color="primary" variant="subtle">button</PiButton>
        <PiButton color="info" variant="subtle">button</PiButton>
        <PiButton color="success" variant="subtle">button</PiButton>
        <PiButton color="warning" variant="subtle">button</PiButton>
        <PiButton color="danger" variant="subtle">button</PiButton>
      </div>
    </Variant>
    <Variant title="outline">
      <div class="demo-flex">
        <PiButton color="primary" variant="outline">button</PiButton>
        <PiButton color="info" variant="outline">button</PiButton>
        <PiButton color="success" variant="outline">button</PiButton>
        <PiButton color="warning" variant="outline">button</PiButton>
        <PiButton color="danger" variant="outline">button</PiButton>
      </div>
    </Variant>
    <Variant title="gradient">
      <div class="demo-flex">
        <PiButton :gradient="{ from: '#ff9a9e', to: '#fad0c4' }" variant="gradient">button</PiButton>
        <PiButton :gradient="{ from: '#a18cd1', to: '#fbc2eb' }" variant="gradient">button</PiButton>
        <PiButton :gradient="{ from: '#d4fc79', to: '#96e6a1', deg: 120 }" variant="gradient">button</PiButton>
        <PiButton :gradient="{ from: '#a1c4fd', to: '#c2e9fb ', deg: 120 }" variant="gradient">button</PiButton>
        <PiButton :gradient="{ from: '#667eea', to: '#764ba2', deg: 135 }" variant="gradient">button</PiButton>
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import PiButton from './button.vue'
import PiIcon from '@/components/icon'
import { UploadFill } from '@piece-ui/icon'
</script>

<style lang="scss">
.demo-flex {
  display: flex;
  & button {
    margin-left: 8px;
    &:first {
      margin-left: 0px;
    }
  }
}
</style>
