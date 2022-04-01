/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export interface DefineConfig {
  theme?: 'dark' | 'light' | 'realDark'
  // | 'realDark'
  primaryColor: string
  layout?: 'sidemenu' | 'topmenu'
  contentWidth?: 'Fluid' | 'Fixed'
  fixedHeader?: boolean
  fixSiderbar?: boolean
  colorWeak?: boolean
  menu?: {
    local?: boolean
  }
  title?: string
  pwa?: boolean
  iconfontUrl?: string | undefined
  production?: boolean
}

const defineConfig: DefineConfig = {
  theme: 'dark', // theme for nav menu
  primaryColor: '#1890ff', // primary color of ant design
  layout: 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
  contentWidth: 'Fluid', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  colorWeak: false,
  menu: {
    local: false
  },
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',
  production: import.meta.env.PROD
}

export default defineConfig
