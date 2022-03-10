import type { AppState } from './types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    isCollapse: false,
    openSetting: false
  }),

  actions: {
    updateSettings(partial: Partial<AppState>) {
      this.$patch(partial)
    }
  }
})
