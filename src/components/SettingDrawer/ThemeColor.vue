<script setup lang="ts">
import type { Item } from './index.vue'

interface PropsColor {
  title: string
  colors: Item[]
  value: string
}

const props = defineProps<PropsColor>()

// const themeKey = genThemeToString(item.key.toUpperCase())
const check = true
// value.toUpperCase() === item.key.toUpperCase() ||
// genThemeToString(value.toUpperCase()) === item.key.toUpperCase()
</script>

<template>
  <div class="theme-color">
    <h3 class="theme-color-title">{{ title }}</h3>
    <div class="theme-color-content">
      <a-tooltip
        v-for="item in colors"
        :key="item.color.toUpperCase()"
        :title="item.key.toUpperCase()"
      >
        <div
          class="theme-color-block"
          :style="{ backgroundColor: item.color }"
          :color="item.color.toUpperCase()"
        >
          <check-outlined v-if="check" />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<style lang="less" scoped>
.theme-color {
  margin-top: 24px;
  overflow: hidden;

  &-title {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 22px;
  }

  &-block {
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
