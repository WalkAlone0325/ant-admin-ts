<script lang="tsx">
import usePermission from '@/hooks/permission'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

export default defineComponent({
  props: {
    isCollapse: Boolean
  },
  setup(props) {
    const permission = usePermission()
    const route = useRoute()
    const router = useRouter()

    // root
    const appRoute = computed(() => {
      return router
        .getRoutes()
        .find((el) => el.name === 'root') as RouteRecordNormalized
    })
    // menuTree
    const menuTree = computed(() => {
      const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children))
      function travel(_routes: RouteRecordRaw[], layer: number) {
        if (!_routes) return null
        const collector: any = _routes.map((element) => {
          // no access
          if (!permission.accessRouter(element)) return null

          // leaf node
          if (!element.children) return element

          // associated child node
          const subItem = travel(element.children, layer)
          if (subItem.length) {
            element.children = subItem
            return element
          }
          // the else logic
          if (layer > 1) {
            element.children = subItem
            return element
          }
          return null
        })
        return collector.filter(Boolean)
      }
      return travel(copyRouter, 0)
    })

    const renderSubMenu = () => {
      function travel(_route: RouteRecordRaw[], nodes = []) {
        if (_route) {
          _route.forEach((element) => {
            if (!permission.accessRouter(element)) return

            const icon =
              element.meta?.icon && h(resolveComponent(element.meta?.icon))

            let r
            if (element.children?.length) {
              r = (
                <a-sub-menu
                  key={element.name}
                  index={element.path}
                  v-slots={{
                    icon: () => icon,
                    title: () => element.meta?.title
                  }}
                >
                  {travel(element.children)}
                </a-sub-menu>
              )
            } else {
              r = (
                <a-menu-item
                  key={element.name}
                  index={element.name}
                  route={element}
                >
                  {icon}
                  <span>{element.meta?.title}</span>
                </a-menu-item>
              )
            }
            nodes.push(r as never)
          })
        }
        return nodes
      }
      return travel(menuTree.value)
    }

    // active route
    const activeRoute = ref('')
    watch(
      route,
      (newVal) => {
        if (newVal.meta.requiresAuth) {
          const lastLen = newVal.matched.length - 1
          const key = newVal.matched[lastLen].name as string
          activeRoute.value = key
        }
      },
      { immediate: true }
    )

    return () => (
      <a-menu collapse={props.isCollapse} mode="inline">
        {renderSubMenu()}
      </a-menu>
    )
  }
})
</script>
