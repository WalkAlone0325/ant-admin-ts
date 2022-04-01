<script setup lang="ts">
import { CheckOutlined } from '@ant-design/icons-vue'
import type { Item } from './index.vue'

interface PropsColor {
  title: string
  colors: Item[]
  value: string
}
interface EmitColor {
  (e: 'change', key: string): void
}

const props = defineProps<PropsColor>()
const emit = defineEmits<EmitColor>()

// const themeKey = genThemeToString(item.key.toUpperCase())
// value.toUpperCase() === item.key.toUpperCase() ||
// genThemeToString(value.toUpperCase()) === item.key.toUpperCase()

const handleChange = (key: string) => {
  emit('change', key)
}
const check = (item: Item) => {
  return props.value.toUpperCase() === item.key.toUpperCase()
}
</script>

<template>
  <div class="theme-color">
    <h3 class="theme-color-title">{{ title }}</h3>
    <div class="theme-color-content">
      <a-tooltip
        v-for="item in colors"
        :key="item.color?.toUpperCase()"
        :title="item.key.toUpperCase()"
      >
        <div
          class="theme-color-block"
          :style="{ backgroundColor: item.color }"
          :color="item.color?.toUpperCase()"
          @click="handleChange(item.key.toUpperCase())"
        >
          <CheckOutlined v-if="check(item)" />
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
