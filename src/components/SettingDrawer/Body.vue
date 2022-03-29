<script setup lang="ts">
interface PropsBody {
  title: string
}

defineProps<PropsBody>()
</script>

<template>
  <div style="margin-bottom: 24px">
    <h3 class="title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.title {
  margin-bottom: 12px;
  // color: @heading-color;
  font-size: 14px;
  line-height: 22px;
}
</style>
