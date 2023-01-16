<template>
  <el-container class="main">
    <el-header class="main-head"> {{name}} </el-header>
    <el-main>
      <el-container>
        <el-main  class="main-main">main</el-main>
        <el-footer class="main-footer">
          <div class="input">
            <textarea/>
          </div>
          <div class="button"> <input type="button" value="发送" @click="send"/> </div>
        </el-footer>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    accountName: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup () {
    return getCurrentInstance()
  },
  data () {
    return {
    }
  },
  methods: {
    send () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-head {
    width: 100%;
    height: 10vh;
    border-left: solid 1px #E8E8E8;
    border-bottom: solid 1px #E8E8E8;
    line-height: 10vh;
    font-size: 20px;
    font-weight: 700;
    user-select: none;
  }

  .el-main {
    padding: 0;
  }

  .main-main {
    border-left: solid 1px #E8E8E8;
    border-top: solid 1px #E8E8E8;
    border-bottom: solid 1px #E8E8E8;
    height: 60vh;
  }

  .main-footer {
    border-left: solid 1px #E8E8E8;
    border-top: solid 1px #E8E8E8;
    height: 30vh;
    padding: 20px;

    .input {
      width: 100%;
      height: 75%;
      background-color: red;

      textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        resize: none;
        border: none;
        font-size: 20px;
        outline: none;
        font-weight: 500;
      }
    }

    .button {
      margin-top: 15px;
      display: flex;
      float: right;
      padding-right: 30px;

      input {
        width: 100px;
        height: 30px;
        background-color: #E9E9E9;
        border: none;
        border-radius: 3px;
        color: #06AE57;
      }

      input:hover {
        background-color: #D2D2D2;
        cursor: pointer;
      }
    }
  }
}
</style>
