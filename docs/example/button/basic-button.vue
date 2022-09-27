<template>
  <DemoBlock class="flex demo-button-group">
    <PiButton type="primary">button</PiButton>
    <PiButton type="warning">button</PiButton>
    <PiButton type="success">button</PiButton>
    <PiButton type="info">button</PiButton>
  </DemoBlock>
</template>

<style lang="scss">
.demo-button-group {
  & button {
    margin-right: 8px;
  }
}
</style>
