<template>
  <div class="login">
    <div class="top">
      <div class="image"><img src="./../assets/logo.png" alt=""></div>
    </div>
    <div class="bottom">
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
                  <a href="#">创建账号</a>
                </el-col>
              </el-row>
            </div>
          </el-form-item>
          <el-button type="primary" width="400px">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        id: '',
        password: ''
      },
      autoLogin: false,
      isSave: false
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 30%;
  height: 50%;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow-dark);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .top {
    width: 100%;
    height: 33%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: linear-gradient(135deg,
    hsl(170edg, 80%, 70%),
    hsl(190edg, 80%, 70%),
    hsl(250edg, 80%, 70%),
    hsl(320edg, 80%, 70%));
    background-size: 200% 200%;
    animation: top 20000ms;
    animation-iteration-count: infinite;

    .image {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #ffffff;
      transition: all .2s;
      position: absolute;
      top: 32%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 64px;
        height: 64px;
        border: 2px solid #475264;
        box-sizing: border-box;
        border-radius: 50%;
      }
    }

    .image:hover {
      top: 30%;
    }
  }

  .bottom {
    width: 100%;
    height: 62%;

    /deep/ .el-form-item__content {
      margin-left: 0 !important;
      margin-right: 0 !important;
      width: 100%;
    }

    .login-form {
      padding-top: 40px;
      padding-left: 15%;
      padding-right: 15%;

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
    }
  }

  @keyframes top {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    0% {
      background-position: 0 0;
    }
  }
}
</style>
