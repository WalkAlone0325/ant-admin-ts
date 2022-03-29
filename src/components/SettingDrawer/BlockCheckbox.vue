<script setup lang="ts">
import type { AppState } from '@/store/modules/app/types'

interface Item {
  key: string
  url: string
  title: string
}
interface PropsCheck {
  value: AppState['settings']['layout'] | AppState['settings']['theme']
  list?: Item[]
}

interface EmitCheck {
  (e: 'change', key: string): void
}

const props = defineProps<PropsCheck>()
const emit = defineEmits<EmitCheck>()

const items = props.list || [
  {
    key: 'sidemenu',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
    title: '侧边菜单布局'
  },
  {
    key: 'topmenu',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg',
    title: '顶部菜单布局'
  }
]

const handleChange = (key: Item['key']) => {
  emit('change', key)
}
</script>

<template>
  <div :key="value" class="block-checbox">
    <a-tooltip v-for="item in items" :key="item.key" :title="item.title">
      <div class="block-checbox-item" @click="handleChange(item.key)">
        <img :src="item.url" :alt="item.key" />
        <div
          class="block-checbox-selectIcon"
          :style="{ display: value === item.key ? 'block' : 'none' }"
        >
          <check-outlined />
        </div>
      </div>
    </a-tooltip>
  </div>
</template>

<style lang="less" scoped>
.block-checbox {
  display: flex;

  &-item {
    position: relative;
    margin-right: 16px;
    // border-radius: @border-radius-base;
    cursor: pointer;

    img {
      width: 48px;
    }
  }
  &-selectIcon {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    padding-left: 24px;
    // color: @primary-color;
    font-weight: bold;
    font-size: 14px;

    .action {
      // color: @primary-color;
      color: aqua;
    }
  }
}
</style>
