<!--
 * @FilePath: index.vue
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-05 19:46:03
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-06-30 11:28:37
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:
-->
<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'home',
})

const name = ref('123')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/review/review-project`)
}
</script>

<template>
  <div class="home_page" @click="go">
  </div>
</template>

<style scoped>
.home_page {
  background: url('/src/assets/images/bg.png') no-repeat center #22536a;
  background-size: 100%;
  @apply grid place-items-center h-screen w-screen
}
</style>
