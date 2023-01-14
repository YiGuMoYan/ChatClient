<template>
  <el-container>
    <el-header class="aside-head">Header</el-header>
    <el-container>
      <el-aside class="aside-aside">Aside</el-aside>
      <el-main class="aside-main">
        <el-scrollbar class="aside-main-scrollbar">
          <list-card v-for="item in accountList" :id="item" :key="item" class="list-card"/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ListCard from '@/components/Index/ListCard.vue'
import axios from 'axios'
import { getCurrentInstance } from 'vue'

export default {
  name: 'Aside',
  components: { ListCard },
  setup () {
    return getCurrentInstance()
  },
  mounted () {
    this.getAccountList()
  },
  data () {
    return {
      accountList: []
    }
  },
  methods: {
    getAccountList () {
      const that = this
      axios({
        url: that.$url + '/accountRelation/getAccountRelation',
        method: 'post',
        data: {
          id: that.$route.params.id,
          token: that.$cookie.get('token')
        }
      }).then(function (res) {
        if (res.data.code === 200) {
          that.accountList = res.data.data
          console.log(that.accountList)
        } else {
          that.$message.error('登录异常，请重新登录')
          that.$route.push('/login')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.aside-head {
  width: 100%;
  height: 15vh;
}

.aside-aside {
  width: 20%;
  height: 85vh;
  background-color: black;
}

.aside-main {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 5px;

  .aside-main-scrollbar {
    height: 85vh;

    .list-card {
      margin-bottom: 10px;
    }

    .list-card:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
