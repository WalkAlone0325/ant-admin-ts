<script setup lang="ts">
import { PieChartOutlined, MailOutlined } from '@ant-design/icons-vue'
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
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.meta?.title }}</template>

    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name" @click="$emit('goto', item)">
          <template #icon>
            <PieChartOutlined />
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
