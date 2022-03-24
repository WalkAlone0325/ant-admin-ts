<script setup lang="ts">
defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'ok'): void
  (e: 'cancel'): void
}>()

defineProps<{
  visible: boolean
  title?: string
}>()
</script>

<template>
  <a-modal
    :visible="visible"
    :title="title"
    @ok="$emit('ok')"
    @cancel="$emit('cancel')"
  >
    <slot></slot>
  </a-modal>
</template>
