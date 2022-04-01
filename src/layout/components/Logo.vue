<script setup lang="ts">
import logoImg from '@/assets/images/logo.png'
import type { AppState } from '@/store/modules/app/types'

defineProps<{
  isCollapse: boolean
  layout?: AppState['settings']['layout']
}>()
</script>

<template>
  <div class="logo-container">
    <div v-if="layout === 'topmenu'" class="logo-content">
      <img :src="logoImg" style="width: 30px; height: 30px" />
      <a-typography-title :level="4">Antd Design Pro</a-typography-title>
    </div>
    <template v-else>
      <transition name="logo">
        <div v-if="!isCollapse" class="logo-content">
          <img :src="logoImg" style="width: 30px; height: 30px" />
          <a-typography-title :level="4">Antd Design Pro</a-typography-title>
        </div>
        <div v-else class="logo-content">
          <img :src="logoImg" style="width: 30px; height: 30px" />
        </div>
      </transition>
    </template>
  </div>
</template>

<style lang="less" scoped>
.logo-enter-active {
  transition: opacity 1s;
}

.logo-enter-from,
.logo-leave-to {
  opacity: 0;
}
.logo-container {
  width: 100%;
  height: 50px;

  .logo-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    h4 {
      margin-left: 10px;
      color: @primary-color;
    }
  }
}
</style>
