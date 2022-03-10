<script setup lang="ts">
import Logo from './Logo.vue'
import Menu from './Menu.vue'

import { useAppStore } from '@/store'

const appStore = useAppStore()
const { isCollapse } = storeToRefs(appStore)
</script>

<template>
  <a-layout-sider
    v-model:collapsed="isCollapse"
    collapsible
    :trigger="null"
    :collapsed-width="64"
  >
    <Logo :is-collapse="isCollapse" />
    <Menu :is-collapse="isCollapse" />
  </a-layout-sider>
</template>
