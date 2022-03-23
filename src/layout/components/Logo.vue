<script setup lang="ts">
import logoImg from '@/assets/images/logo.png'

defineProps<{
  isCollapse: boolean
}>()
</script>

<template>
  <div class="logo-container">
    <transition name="logo">
      <div v-if="!isCollapse" class="logo-content">
        <img :src="logoImg" style="width: 30px; height: 30px" />
        <h3>后台管理系统</h3>
      </div>
      <div v-else class="logo-content">
        <img :src="logoImg" style="width: 30px; height: 30px" />
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.logo-enter-active {
  transition: opacity 1.5s;
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

    h3 {
      margin-left: 10px;
      color: #fff;
    }
  }
}
</style>
