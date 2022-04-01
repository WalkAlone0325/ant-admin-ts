<script setup lang="ts">
import type { AppState } from '@/store/modules/app/types'
import Body from './Body.vue'
import BlockCheckbox from './BlockCheckbox.vue'
import ThemeColor from './ThemeColor.vue'
import LayoutSetting from './LayoutSetting.vue'
import themePluginConfig from '@/config/themePluginConfig'

export interface Item {
  color?: string
  key: string
  theme?: string
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

const changeSetting = (type: any, value: any) => {
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

const getThemeList = () => {
  const list = themePluginConfig.theme || []

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
    }
  ]

  const darkColorList: Item[] = [
    {
      key: '#1890ff',
      color: '#1890ff',
      theme: 'dark'
    }
  ]

  const lightColorList: Item[] = [
    {
      key: '#1890ff',
      color: '#1890ff',
      theme: 'dark'
    }
  ]

  if (list.find((item) => item.theme === 'dark')) {
    themeList.push({
      key: 'realDark',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
      title: '暗黑模式风格' || 'app.setting.pagestyle.realdark'
    })
  }

  list.forEach((item) => {
    const color = (item.modifyVars || {})['@primary-color']
    if (!item.theme || item.theme === 'light') {
      lightColorList.push({
        color,
        ...item
      })
    }
    if (item.theme === 'dark' && color) {
      darkColorList.push({
        color,
        ...item
      })
    }
  })

  return {
    colorList: {
      dark: darkColorList,
      light: lightColorList
    },
    themeList
  }
}

const themeList = getThemeList()
</script>

<template>
  <a-drawer v-model:visible="showDrawer" :width="300">
    <div>
      <Body title="整体风格设置">
        <BlockCheckbox
          :list="themeList.themeList"
          :value="setting.theme"
          @change="(val) => changeSetting('theme', val)"
        />
      </Body>

      <ThemeColor
        title="主题色"
        :colors="
          themeList.colorList[setting.theme === 'realDark' ? 'dark' : 'light']
        "
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

      <!-- <LayoutSetting /> -->
    </div>
  </a-drawer>
</template>
