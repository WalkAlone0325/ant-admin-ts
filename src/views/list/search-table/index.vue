<script setup lang="ts">
import type { FormInstance } from 'ant-design-vue'
import AddModal from './components/AddModal.vue'

const expand = ref(false)
const queryForm = reactive<any>({})
const queryFormRef = ref<FormInstance>()

// table
const dataSource = ref([
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园4号' }
])
const columns = ref([
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '地址', dataIndex: 'address', key: 'address' }
])

// modal
const modalVisible = ref(false)
const modalTitle = ref('')

// button group
const handleAdd = () => {
  modalVisible.value = true
}

const handleOk = () => {
  modalVisible.value = false
}
const handleCancel = () => {
  modalVisible.value = false
}
</script>

<template>
  <div>
    <a-form ref="queryFormRef" :model="queryForm">
      <a-row :gutter="24">
        <template v-for="i in 10" :key="i">
          <a-col v-show="expand || i <= 4" :span="5">
            <a-form-item :name="`field-${i}`" :label="`field-${i}`">
              <a-input
                v-model:value="queryForm[`field-${i}`]"
                placeholder="placeholder"
              />
            </a-form-item>
          </a-col>
        </template>
        <a-col style="text-align: right" :span="4">
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button
            style="margin: 0 8px"
            @click="() => queryFormRef?.resetFields()"
          >
            重置
          </a-button>
          <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            展开
          </a>
        </a-col>
      </a-row>
    </a-form>

    <a-space style="margin-bottom: 8px">
      <a-button type="primary" @click="handleAdd">新增</a-button>
      <a-button>修改</a-button>
      <a-button type="primary" danger>删除</a-button>
      <a-button type="dashed">导出</a-button>
    </a-space>

    <a-table :data-source="dataSource" :columns="columns"></a-table>

    <AddModal
      v-model:visible="modalVisible"
      :title="modalTitle"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AddModal>
  </div>
</template>
