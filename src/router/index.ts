import { useUserStore } from '@/store'
import { isLogin } from '@/utils/auth'
import usePermission from '@/hooks/permission'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { App } from 'vue'
import type { LocationQueryRaw, Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import appRoutes from './modules'

NProgress.configure({ showSpinner: false })

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

// guard
export function setupRouterGuard(router: Router) {
  router.beforeEach(async (to, form, next) => {
    NProgress.start()

    const userStore = useUserStore()

    async function crossroads() {
      const permission = usePermission()
      if (permission.accessRouter(to)) await next()
      else {
        const destination = permission.findFirstPermissionRoute(
          appRoutes,
          userStore.role
        ) || {
          name: 'notFound'
        }
        await next(destination)
      }
      NProgress.done()
    }

    next()
    NProgress.done()

    // if (isLogin()) {
    //   if (userStore.role) {
    //     crossroads()
    //   } else {
    //     try {
    //       await userStore.info()
    //       crossroads()
    //     } catch (error) {
    //       next({
    //         name: 'login',
    //         query: {
    //           redirect: to.name,
    //           ...to.query
    //         } as LocationQueryRaw
    //       })
    //       NProgress.done()
    //     }
    //   }
    // } else {
    //   if (to.name === 'login') {
    //     next()
    //     NProgress.done()
    //     return
    //   }
    //   next({
    //     name: 'login',
    //     query: {
    //       redirect: to.name,
    //       ...to.query
    //     } as LocationQueryRaw
    //   })
    //   NProgress.done()
    // }
  })
}
