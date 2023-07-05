<!--
 * @FilePath: review-info.vue
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-29 11:45:39
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-06-30 18:33:14
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:
-->
<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'ReviewInfo',
})

const dialogVisible = ref(false)
const router = useRouter()

interface User {
  date: string
  name: string
  address: string
}

const currentRow = ref()

const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
  dialogVisible.value = true
  console.log(currentRow.value)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]


function goBack() {
  router.back()
}


</script>
<template>
  <div class="review-container">
    <el-table ref="singleTableRef" :data="tableData" border height="440" highlight-current-row class="w-full mt-2"
      @current-change="handleCurrentChange">
      <el-table-column type="index" width="50" />
      <el-table-column property="date" label="Date" width="120" />
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </div>
  <Dialog v-if="dialogVisible" v-model="dialogVisible" :fullscreen="true" title="预览">
    <Office :url="'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'" />
    <!-- <template #footer>
      <el-button @click="dialogVisible = false">close</el-button>
    </template> -->
  </Dialog>
</template>

<style scoped>
.review-container {
  background-image: url('/src/assets/images/review_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply pt-10 px-5 h-screen w-screen
}

.el-table {
  --el-table-border-color: var(--el-fill-color-light);
  --el-table-border: 1px solid var(--el-fill-color-light);
  --el-table-text-color: white;
  --el-table-header-text-color: var(--el-fill-color-light);
  --el-table-row-hover-bg-color: #cccccc45;
  --el-table-current-row-bg-color: #cccccc45;
  --el-table-header-bg-color: transparent;
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
}
</style>
