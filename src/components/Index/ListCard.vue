<template>
  <div class="list-card">
    <div>
      <el-badge :value="messageNum" :hidden="isHidden">
        <el-avatar size="large"> {{ name[0] }} </el-avatar>
      </el-badge>
    </div>
    <div class="message">
      <div class="name">{{ name }}</div>
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
      name: '',
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
            that.name = res.data.data.name
          } else {
            that.$message.error('请求账号异常')
          }
        } else {
          that.$message.error('登录异常，请重新登录')
          that.$route.push('/login')
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
  background: var(--el-color-primary-light-9);
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5%;
  float: left;

  div {
    .el-avatar {
      text-align: center;
      user-select: none;
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
      font-size: 25px;
    }
  }
}
</style>
