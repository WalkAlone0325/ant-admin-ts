<script setup lang="ts">
import { PieChartOutlined } from '@ant-design/icons-vue'
import SubMenu from './SubMenu.vue'
import usePermission from '@/hooks/permission'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

defineProps<{
  isCollapse: boolean
}>()

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

const openKeys = ref<string[]>([])
const selectedKeys = ref<string[]>([])

const goto = (item: RouteRecordRaw) => {
  router.push({
    name: item.name
  })
}

watch(
  route,
  (newVal) => {
    if (newVal.meta.requiresAuth) {
      const lastLen = newVal.matched.length - 1
      const key = newVal.matched[lastLen].name as string
      const openKey = newVal.matched[1].name as string
      openKeys.value = [openKey]
      selectedKeys.value = [key]
    }
  },
  { immediate: true }
)
</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
  >
    <template v-for="item in menuTree" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name" @click="goto(item)">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.name" :menu-info="item" @goto="goto" />
      </template>
    </template>
  </a-menu>
</template>
