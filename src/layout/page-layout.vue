<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'

import { useAppStore } from '@/store'
import type { AppState } from '@/store/modules/app/types'

const appStore = useAppStore()
const { isCollapse, showDrawer, settings } = storeToRefs(appStore)

const handleSettingChange = ({
  type,
  value
}: {
  type: Partial<AppState>
  value: boolean | undefined | string
}) => {
  console.log(type, value)
  type && appStore.updateSettings({ type, value } as Partial<AppState>)
}
</script>

<template>
  <a-layout class="layout-container">
    <SideBar v-model:collapse="isCollapse" :is-collapse="isCollapse" />

    <a-layout>
      <NavBar :is-collapse="isCollapse" />
      <AppMain />
    </a-layout>
    <SettingDrawer
      :setting="settings"
      :show="showDrawer"
      @update:show="appStore.updateSettings({ showDrawer: !showDrawer })"
      @change="handleSettingChange"
    />
  </a-layout>
</template>
