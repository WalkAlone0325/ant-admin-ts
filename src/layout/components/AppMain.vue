<template>
  <a-layout-content
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
              <div>
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
