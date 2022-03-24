import type { App } from 'vue'
import * as Icons from '@ant-design/icons-vue'

const icons: any = Icons

export function setupIcons(app: App<Element>) {
  for (const i in icons) {
    app.component(i, icons[i])
  }
}
