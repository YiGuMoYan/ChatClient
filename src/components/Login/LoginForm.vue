<template>
  <div class="login-form">
    <el-form :model="loginForm" label-width="80%">
      <el-form-item>
        <input
          type="text"
          placeholder="请输入账号"
          v-model="loginForm.id"/>
      </el-form-item>
      <el-form-item>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"/>
      </el-form-item>
      <el-form-item>
        <div style="width: 100%">
          <el-row>
            <el-col :span="8">
              <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
            </el-col>
            <el-col :span="8">
              <el-checkbox v-model="isSave">记住密码</el-checkbox>
            </el-col>
            <el-col :span="8">
              <a @click="register()" class="register-font">注册账号</a>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
      <el-button type="primary" width="400px" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import Bus from '@/Bus'
import { getCurrentInstance } from 'vue'
import axios from 'axios'

export default {
  setup () {
    return getCurrentInstance()
  },
  mounted () {
    $('.login-form').fadeTo(1000, 1)
  },
  data () {
    return {
      loginForm: {
        id: '',
        password: ''
      },
      autoLogin: false,
      isSave: false
    }
  },
  methods: {
    register () {
      Bus.$emit('register')
    },
    login () {
      const that = this
      axios({
        url: that.$url + '/account/login',
        method: 'post',
        data: that.loginForm
      }).then(function (res) {
        if (res.data.data) {
          const token = res.data.data
          that.$cookie.set('token', token)
          that.$message.success('登录成功')
        } else {
          that.$message.error('登录失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  padding-top: 40px;
  padding-left: 15%;
  padding-right: 15%;
  opacity: 0;

  input {
    width: 100%;
    height: 30px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: #A8ABB2;
    outline: none;
    padding-left: .5rem;;
  }

  input:focus ~, input:hover {
    border-bottom-color: #409EFF;
  }

  input::-webkit-input-placeholder {
    position: relative;
    color: #A8ABB2;
  }

  .el-button {
    width: 100%;
  }

  .el-col {
    text-align: center;
  }

  a {
    color: #606266;
    text-decoration: none;
    user-select: none;
    display: block;
  }

  .register-font {
    color: #606266;
  }

  .register-font:hover, /deep/ .el-checkbox__label:hover {
    color: #75B9FF;
    cursor: pointer;
  }
}
</style>
