<template>
  <el-container>
    <el-header class="aside-head">{{ account.name }}</el-header>
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
    this.getAccount()
    this.getAccountList()
  },
  data () {
    return {
      account: {},
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
    },
    getAccount () {
      const that = this
      axios({
        url: that.$url + '/account/getAccount',
        method: 'post',
        data: {
          token: this.$cookie.get('token')
        }
      }).then(function (res) {
        if (res.data.code === 200 && res.data.data) {
          that.account = res.data.data
        } else {
          that.$router.path('/login')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.aside-head {
  width: 100%;
  height: 10vh;
  font-size: 30px;
  font-weight: 600;
  line-height: 10vh;
  text-align: center;
}

.aside-aside {
  width: 20%;
  height: 90vh;
  background-color: #2E2E2E;
}

.aside-main {
  padding: 0;

  .aside-main-scrollbar {
    height: 90vh;
  }
}
</style>
