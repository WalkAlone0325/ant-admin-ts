<script setup lang="ts">
import Logo from './Logo.vue'

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
    <a-menu>
      <a-menu-item key="1">
        <span>nav1</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
