<template>
  <a-row :gutter="16" :wrap="false">
    <a-col flex="none">
      <a-space direction="vertical" align="center">
        <!-- Primary Color -->
        <input type="color" :value="colorState.primaryColor" @input="e => onColorChange('primaryColor', e)" />

        <span style="color: var(--ant-primary-color)">var(`--ant-primary-color`)</span>

        <!-- Error Color -->
        <input type="color" :value="colorState.errorColor" @input="e => onColorChange('errorColor', e)" />

        <span style="color: var(--ant-error-color)">var(`--ant-error-color`)</span>

        <!-- Warning Color -->
        <input type="color" :value="colorState.warningColor" @input="e => onColorChange('warningColor', e)" />

        <span style="color: var(--ant-warning-color)">var(`--ant-warning-color`)</span>

        <!-- Success Color -->
        <input type="color" :value="colorState.successColor" @input="e => onColorChange('successColor', e)" />

        <span style="color: var(--ant-success-color)">var(`--ant-success-color`)</span>

        <!-- Info Color -->
        <input type="color" :value="colorState.infoColor" @input="e => onColorChange('infoColor', e)" />
        <span style="color: var(--ant-info-color)">var(`--ant-info-color`)</span>
      </a-space>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, h, reactive, ref } from 'vue';
import { ConfigProvider, Space, Divider } from 'ant-design-vue';
import type { TreeSelectProps } from 'ant-design-vue';
import {
  DownOutlined,
  MailOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
    MailOutlined,
    SettingOutlined,
    ClockCircleOutlined,
    SplitSpace: (props, { slots }) =>
      h(Space, { size: 4, ...props }, { ...slots, split: () => h(Divider, { type: 'vertical' }) }),
  },
  setup() {
    const inputProps = {
      style: { width: '128px' },
    };

    const selectProps = {
      ...inputProps,
      options: [
        { value: 'light', label: 'Light' },
        { value: 'bamboo', label: 'Bamboo' },
        { value: 'little', label: 'Little' },
      ],
    };

    const treeData = [
      {
        value: 'little',
        key: 'little',
        label: 'Little',
        title: 'Little',
        children: [
          { value: 'light', key: 'light', label: 'Light', title: 'Light' },
          { value: 'bamboo', key: 'bamboo', label: 'Bamboo', title: 'Bamboo' },
        ],
      },
    ];

    const treeSelectProps: TreeSelectProps = {
      ...inputProps,
      treeCheckable: true,
      maxTagCount: 'responsive',
      treeData,
    };

    const carTabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];

    const transferData = [];

    for (let i = 0; i < 20; i++) {
      transferData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      });
    }

    const colorState = reactive({
      primaryColor: '#1890ff',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    });

    const onColorChange = (type: string, e: any) => {
      Object.assign(colorState, { [type]: e.target.value });
      ConfigProvider.config({
        theme: colorState,
      });
    };
    return {
      selectProps,
      carTabListNoTitle,
      onColorChange,
      treeData,
      treeSelectProps,
      transferData,
      colorState,
      inputProps,
      selectedKeys: ref(['mail']),
    };
  },
});
</script>

