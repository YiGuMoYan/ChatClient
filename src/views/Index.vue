<template>
  <div class="index">
    <el-container class="container">
      <el-aside class="aside">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/Index/Aside.vue'

export default {
  name: 'Index',
  components: { Aside }
}
</script>

<style lang="less" scoped>
.index {
  height: 100vh;

  .container {
    height: 100vh;

    .aside {
      width: 25%;
      height: 100vh;
    }
  }
}
</style>
