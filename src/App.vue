<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const { settings } = storeToRefs(appStore)

watch(
  () => settings.value.primaryColor,
  () => {
    ConfigProvider.config({
      theme: {
        primaryColor: settings.value.primaryColor
      }
    })
  }
)
</script>

<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
