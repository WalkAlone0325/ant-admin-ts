<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'

import { useAppStore } from '@/store'

const appStore = useAppStore()
const { isCollapse } = storeToRefs(appStore)
</script>

<template>
  <a-layout class="layout-container">
    <SideBar />

    <a-layout>
      <NavBar />
      <AppMain />
    </a-layout>
  </a-layout>
</template>
