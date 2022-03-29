import type { DefineConfig } from '@/config/defineConfig'
export interface AppState {
  isCollapse: boolean
  showDrawer: boolean
  settings: DefineConfig
  // [key: string]: unknown
}
