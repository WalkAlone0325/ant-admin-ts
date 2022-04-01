<script setup lang="ts">
import type { MenuTheme } from 'ant-design-vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'

defineProps<{
  isCollapse: boolean
  theme?: MenuTheme
}>()
</script>

<template>
  <a-layout-sider
    collapsible
    :theme="theme"
    :collapsed="isCollapse"
    :trigger="null"
    :collapsed-width="64"
  >
    <Logo :is-collapse="isCollapse" />
    <Menu :is-collapse="isCollapse" :theme="theme" />
  </a-layout-sider>
</template>
