<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
const { openSetting } = storeToRefs(appStore)
</script>

<template>
  <a-drawer v-model:visible="openSetting">
    <p>123</p>
  </a-drawer>
</template>
