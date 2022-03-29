<script setup lang="ts">
import type { Ref } from 'vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'

defineProps<{
  isCollapse: boolean
}>()
</script>

<template>
  <a-layout-sider
    collapsible
    :collapsed="isCollapse"
    :trigger="null"
    :collapsed-width="64"
  >
    <Logo :is-collapse="isCollapse" />
    <Menu :is-collapse="isCollapse" />
  </a-layout-sider>
</template>
