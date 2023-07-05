<!--
 * @FilePath: review-project.vue
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-29 11:45:39
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-06-30 11:25:15
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:
-->
<script setup lang="ts" generic="T extends any, O extends any">
import { Search } from '@element-plus/icons-vue'


defineOptions({
  name: 'reviewProject',
})
const router = useRouter()
let customStyles = ref({
  formItemSize: '32px',
})

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

let checkedReviewType = ref(true)

interface User {
  date: string
  name: string
  address: string
}

const currentRow = ref()

const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
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

function onChangeReviewType() {
  checkedReviewType.value = !checkedReviewType.value
}

const { orientation } = useScreenOrientation()

watch(() => orientation.value, (e) => {
  customStyles.value.formItemSize = e === 'portrait-primary' ? '32px' : '5px'

})

</script>

<template>
  <div class="review-container" :style="customStyles">
    <el-form :inline="true" :model="formInline" :label-width="70">
      <div class="flex flex-wrap mx-5">
        <el-form-item label="项目名称" >
          <el-input v-model="formInline.user" :suffix-icon="Search" placeholder="请输入项目名称" clearable />
        </el-form-item>
        <el-form-item label="单位" >
          <el-select v-model="formInline.region" placeholder="请选择单位" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="项目类型" >
          <el-select v-model="formInline.region" placeholder="请选择项目类型" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="项目分类" >
          <el-select v-model="formInline.region" placeholder="请选择项目分类" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </div>
    </el-form>

    <!-- <el-form :inline="true" :model="formInline" :label-width="70">
      <el-form-item label="项目名称">
        <el-input v-model="formInline.user" :suffix-icon="Search" placeholder="请输入项目名称" clearable />
      </el-form-item>
      <el-form-item label="单位">
        <el-select v-model="formInline.region" placeholder="请选择单位" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="项目类型">
        <el-select v-model="formInline.region" placeholder="请选择项目类型" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="项目分类">
        <el-select v-model="formInline.region" placeholder="请选择项目分类" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form> -->
    <el-divider />
    <div class="flex ml-5">
      <el-check-tag size="large" :checked="checkedReviewType" @change="onChangeReviewType"
        class="mr-2">可研评审</el-check-tag>
      <el-check-tag size="large" :checked="!checkedReviewType" @change="onChangeReviewType">竣工验收评审</el-check-tag>
    </div>

    <el-table ref="singleTableRef" :data="tableData" border height="440" highlight-current-row class="w-full mt-2"
      @current-change="handleCurrentChange">
      <el-table-column type="index" width="50" />
      <el-table-column property="date" label="Date" width="120" />
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column property="address" label="Address" />
    </el-table>
    <!-- <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
      <el-button @click="setCurrent()">Clear selection</el-button>
    </div> -->
  </div>
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

.el-form--inline .el-form-item {
  --el-text-color-regular: #fff;
  margin-right: v-bind(customStyles.formItemSize);
}

::v-deep .el-form-item__label {
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 0 0 auto;
  font-size: var(--el-form-label-font-size);
  color: #fff;
  height: 32px;
  line-height: 32px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
</style>
