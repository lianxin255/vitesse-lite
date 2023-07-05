<!--
 * @FilePath: index.vue
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-30 17:13:50
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-07-05 09:31:58
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:
-->
<script setup lang="ts" generic="T extends any, O extends any">
import VueOfficeDocx from '@vue-office/docx'
//引入相关样式
import '@vue-office/docx/lib/index.css'

import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css'

import VueOfficePdf from '@vue-office/pdf'

defineOptions({
  name: 'Office'
})

interface Props {
  url: string
}
const { url } = defineProps<Props>()



let componentType = ref(VueOfficeExcel)

const selectedComponent = computed(() => {
  console.log(url)
  if (url.endsWith(".docx")) {
    componentType.value = VueOfficeDocx
  } else if (url.endsWith(".xlsx")) {
    componentType.value = VueOfficeExcel
  } else if (url.endsWith(".pdf")) {
    componentType.value = VueOfficePdf
  }
  return componentType.value
})

function renderedHandler() {
  console.log("渲染完成")
}
function errorHandler() {
  console.log("渲染失败")
}
</script>
<template>
  <component :is="selectedComponent" :src="url" class="h-screen" @rendered="renderedHandler" @error="errorHandler" />
</template>
