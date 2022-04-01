<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const { isCollapse, showDrawer, settings } = storeToRefs(appStore)

const handleSettingChange = ({ type, value }: { type: any; value: any }) => {
  // type && appStore.updateSettings({ [type]: value } as Partial<AppState>)
  type && appStore.changeSetting(type, value)
}
</script>

<template>
  <a-layout class="layout-container">
    <SideBar
      v-if="settings.layout === 'sidemenu'"
      v-model:collapse="isCollapse"
      :is-collapse="isCollapse"
      :theme="settings.theme"
    />

    <a-layout>
      <NavBar :is-collapse="isCollapse" :setting="settings" />
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
