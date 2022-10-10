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
