<script setup lang="ts">
import type { AppState } from '@/store/modules/app/types'
import Body from './Body.vue'
import BlockCheckbox from './BlockCheckbox.vue'
import ThemeColor from './ThemeColor.vue'
import LayoutSetting from './LayoutSetting.vue'

export interface Item {
  color: string
  key: string
}

const props = defineProps<{
  setting: AppState['settings']
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', data: any): void
  (e: 'change', data: any): void
}>()

const showDrawer = computed<boolean>({
  get() {
    return props.show
  },
  set(val) {
    emit('update:show', val)
  }
})

const changeSetting = (type: string, value: any) => {
  emit('change', { type, value })
  // handleChangeSetting(type, value, false)
}
// const handleChangeSetting = (key, value, hideMessageLoading) => {
//   if (key === 'primaryColor') {
//     // 更新主色调
//     updateTheme(value)
//   }
//   // if (key === 'colorWeak') {
//   //   updateColorWeak(value)
//   // }
// }
// const updateTheme = (value: string) => {
//   console.log('first')
// }

const themeList = [
  {
    key: 'light',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg',
    title: '亮色菜单风格' || 'app.setting.pagestyle.light'
  },
  {
    key: 'dark',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
    title: '暗色菜单风格' || 'app.setting.pagestyle.dark'
  },
  {
    key: 'realDark',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
    title: '暗黑模式风格' || 'app.setting.pagestyle.realdark'
  }
]

const darkColorList = [
  {
    key: '#1890ff',
    color: '#1890ff',
    theme: 'dark'
  }
]

const lightColorList = [
  {
    key: '#1890ff',
    color: '#1890ff',
    theme: 'dark'
  }
]

const colorList = {
  dark: darkColorList,
  light: lightColorList
}

const colors: Item[] = [{ color: '', key: '' }]
</script>

<template>
  <a-drawer v-model:visible="showDrawer" :width="300">
    <div>
      <Body title="整体风格设置">
        <BlockCheckbox
          :list="themeList"
          :value="setting.theme"
          @change="(val) => changeSetting('theme', val)"
        />
      </Body>

      <ThemeColor
        title="主题色"
        :colors="colorList[setting.theme === 'realDark' ? 'dark' : 'light']"
        :value="setting.primaryColor"
        @change="(color) => changeSetting('primaryColor', color)"
      />

      <a-divider />

      <Body title="导航模式">
        <BlockCheckbox
          :value="setting.layout"
          @change="(val) => changeSetting('layout', val)"
        />
      </Body>

      <LayoutSetting />
    </div>
  </a-drawer>
</template>
