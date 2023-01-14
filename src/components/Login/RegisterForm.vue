<template>
  <div class="register-form">
    <el-form :model="registerForm" label-width="100%">
      <el-form-item>
        <input
          type="text"
          placeholder="请输入昵称"
          v-model="registerForm.name"/>
      </el-form-item>
      <el-form-item>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="registerForm.password"/>
      </el-form-item>
      <el-form-item>
        <input
          type="password"
          placeholder="请重复输入密码"
          v-model="repeatPassword"
          @blur="checkPassword()"/>
      </el-form-item>
      <el-form-item>
        <div style="width: 100%">
          <el-radio-group v-model="registerForm.sex" style="width: 100%">
            <el-row  style="width: 100%">
              <el-col :span="8">
                <el-radio :label="this.sexList[0]">{{ this.sexList[0] }}</el-radio>
              </el-col>
              <el-col :span="8">
                <el-radio :label="this.sexList[1]">{{ this.sexList[1] }}</el-radio>
              </el-col>
              <el-col :span="8">
                <el-radio :label="this.sexList[2]">{{ this.sexList[2] }}</el-radio>
              </el-col>
            </el-row>
          </el-radio-group>
        </div>
      </el-form-item>
      <el-form-item>
        <input
          type="text"
          placeholder="请输入邮箱"
          v-model="registerForm.email"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" width="400px" @click="register">注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-link :underline="false" @click="login">登录账号</el-link>
      </el-form-item>
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
    $('.register-form').fadeTo(1000, 1)
  },
  data () {
    return {
      registerForm: {
        name: '',
        password: '',
        sex: '机械人',
        email: ''
      },
      repeatPassword: '',
      sexList: ['机械人', '男', '女']
    }
  },
  methods: {
    checkPassword () {
      if (this.repeatPassword !== this.registerForm.password) {
        this.$message.error('两次密码不同')
      }
    },
    login () {
      Bus.$emit('login')
    },
    register () {
      const that = this
      axios({
        url: that.$url + '/account/register',
        method: 'post',
        data: that.registerForm
      }).then(function (res) {
        if (res.data.data) {
          that.$message.success('注册成功')
        } else {
          that.$message.error('注册失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.register-form {
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

  input:focus~, input:hover {
    border-bottom-color: #409EFF;
  }

  input::-webkit-input-placeholder {
    position: relative;
    color: #A8ABB2;
  }

  .el-col {
    text-align: center;
  }

  .el-button {
    width: 100%;
  }
}
</style>
