<template>
  <a-layout-content
    class="layout-content"
    :style="{
      margin: '24px 16px',
      padding: '24px',
      background: '#fff'
    }"
  >
    <Suspense>
      <template #default>
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <div class="app-content">
                <!-- multi root component warning -->
                <component :is="Component" :key="route.path" />
              </div>
            </keep-alive>
          </transition>
        </router-view>
      </template>
    </Suspense>
  </a-layout-content>
</template>

<style lang="less" scoped>
.layout-content {
  max-height: calc(100vh - 50px);

  .app-content {
    height: 100%;
  }
}
</style>
