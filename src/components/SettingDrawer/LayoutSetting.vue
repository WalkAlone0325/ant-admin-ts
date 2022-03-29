<script setup lang="ts">
import type { DefineConfig } from '@/config/defineConfig'
import type { AppState } from '@/store/modules/app/types'
interface EmitLayout {
  (e: 'change', data: any): void
}

// contentWidth: PropTypes.oneOf(['Fluid', 'Fixed']).def('Fluid'),
//   fixedHeader: PropTypes.bool,
//   fixSiderbar: PropTypes.bool,
//   layout: PropTypes.oneOf(['sidemenu', 'topmenu']),
// defineProps()

const emit = defineEmits<EmitLayout>()

const handleChange = (type, value) => {
  emit('change', { type, value })
}

const dataSource = [
  { title: 'contentWidth', type: 'select', value: {} },
  { title: 'fixedheader', type: 'switch', action: {} },
  { title: 'fixedsidebar', type: 'switch', action: {} }
]
</script>

<template>
  <a-list :split="false" :data-source="dataSource">
    <template #renderItem="{ item }">
      <a-tooltip :title="item.title" placement="left">
        <a-list-item>
          <a-select
            v-if="item.type === 'select'"
            size="small"
            style="width: 80px"
            :value="contentWidth"
            @select="(value: string) => handleChange('contentWidth', value)"
          >
            <a-select-option value="Fixed">固定</a-select-option>
            <a-select-option value="Fluid">流体</a-select-option>
          </a-select>
          <a-switch
            v-else
            size="small"
            :checked="!!fixedHeader"
            @change="(checked: boolean) => handleChange('fixedHeader', checked)"
          />
        </a-list-item>
      </a-tooltip>
    </template>
  </a-list>
</template>
