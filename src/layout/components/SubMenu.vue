<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineProps<{
  menuInfo: RouteRecordRaw
}>()

// defineEmits(['goto'])
defineEmits<{
  (e: 'goto', item: RouteRecordRaw): void
}>()
</script>

<template>
  <a-sub-menu :key="menuInfo.name">
    <template #icon>
      <component :is="menuInfo.meta?.icon" />
    </template>
    <template #title>{{ menuInfo.meta?.title }}</template>

    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name" @click="$emit('goto', item)">
          <template #icon>
            <component :is="item.meta?.icon" />
          </template>
          {{ item.meta?.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.name" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
