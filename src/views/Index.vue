<template>
  <div class="index">
    <el-container class="container">
      <el-aside class="aside">
        <Aside/>
      </el-aside>
      <Main />
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/Index/Aside.vue'
import Main from '@/components/Index/Main.vue'

export default {
  name: 'Index',
  components: { Main, Aside }
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
