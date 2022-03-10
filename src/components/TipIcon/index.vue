<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    placement?: string
  }>(),
  {
    placement: 'bottom'
  }
)
</script>

<template>
  <a-tooltip>
    <template #title>{{ title }}</template>
    <slot></slot>
  </a-tooltip>
</template>
