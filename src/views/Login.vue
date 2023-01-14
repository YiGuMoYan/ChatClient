<template>
  <div class="login">
    <div class="top">
      <div class="image"><img src="./../assets/logo.png" alt=""></div>
    </div>
    <div class="bottom">
      <login-form v-if="type === 1"/>
      <register-form v-else-if="type === 2"/>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue'
import RegisterForm from '@/components/Login/RegisterForm.vue'
import Bus from '@/Bus'

export default {
  components: { LoginForm, RegisterForm },
  mounted () {
    Bus.$on('register', () => {
      $('.login').css('height', '80%')
      $('login-form').fadeTo(1000, 0)
      this.type = 2
    })
    Bus.$on('login', () => {
      $('.login').css('height', '50%')
      $('register-form').fadeTo(1000, 0)
      this.type = 1
    })
  },
  data () {
    return {
      type: 1
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
  transition: all .3s;

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
