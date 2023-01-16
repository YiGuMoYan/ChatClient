<template>
  <div class="list-card">
    <div>
      <el-badge :value="messageNum" :hidden="isHidden">
        <el-avatar size="large"> {{ account.name[0] }} </el-avatar>
      </el-badge>
    </div>
    <div class="message">
      <div class="name">{{ account.name }}</div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import axios from 'axios'

export default {
  name: 'ListCard',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup () {
    return getCurrentInstance()
  },
  mounted () {
    this.getMessage()
  },
  data () {
    return {
      account: {
        name: ''
      },
      messageNum: 0,
      isHidden: true
    }
  },
  methods: {
    getMessage () {
      const that = this
      axios({
        url: that.$url + '/account/getAccountName/' + that.id,
        method: 'post',
        data: {
          token: this.$cookie.get('token')
        }
      }).then(function (res) {
        if (res.data.code === 200) {
          if (res.data.data) {
            that.account = res.data.data
          } else {
            that.$message.error('请求账号异常')
          }
        } else {
          that.$message.error('登录异常，请重新登录')
          that.$router.push('/login')
        }
      })
    }
  },
  watch: {
    messageNum () {
      this.isHidden = this.messageNum === 0
    }
  }
}
</script>

<style lang="less" scoped>
.list-card {
  width: 90%;
  height: 60px;
  background-color: #EAE8E7;
  display: flex;
  align-items: center;
  padding: 5%;
  float: left;
  user-select: none;

  div {
    .el-avatar {
      text-align: center;
      border-right: 1px solid var(--el-border-color);
      font-size: 28px;
    }
  }

  .message {
    flex: 1;
    height: 100%;
    margin-left: 30px;

    .name {
      display: block;
      height: 60%;
      width: 100%;
      font-size: 20px;
      font-weight: 600;
    }
  }
}

.list-card:hover {
  background-color: #DBDAD9;
}
</style>
