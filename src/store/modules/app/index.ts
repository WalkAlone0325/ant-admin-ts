import defaultSettings from '@/config/defineConfig'
import type { AppState } from './types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    ...defaultSettings,
    isCollapse: false,
    showDrawer: false,
    settings: {
      // 布局类型
      layout: defaultSettings.layout,
      contentWidth: defaultSettings.contentWidth,
      // 主题
      theme: defaultSettings.theme,
      // 主色调
      primaryColor: defaultSettings.primaryColor,
      fixedHeader: defaultSettings.fixedHeader,
      fixSiderbar: defaultSettings.fixSiderbar,
      colorWeak: defaultSettings.colorWeak
    }
  }),

  actions: {
    updateSettings(partial: Partial<AppState>) {
      this.$patch(partial)
    }
  }
})
