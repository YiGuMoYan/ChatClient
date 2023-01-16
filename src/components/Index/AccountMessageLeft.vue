<template>
  <div class="account-message">
    <div class="display">
      <span class="head">
        <el-avatar> {{ name[0] }} </el-avatar>
      </span>
      <span class="message"> <p>{{message}}</p>  </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '匿名用户'
    },
    message: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.account-message {
  display: block;
  width: 100%;

  .display {
    height: 100%;
    float: left;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;

    span {
      display: inline-block;
    }

    .head {
      user-select: none;
      height: 100%;

      .el-avatar {
        text-align: center;
        border-right: 1px solid var(--el-border-color);
        font-size: 28px;
      }
    }

    .message {
      margin-left: 20px;
      max-width: 50%;
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 0 15px;
      word-wrap: break-word;
      word-break: break-word;
      line-height: 28px;
    }
  }
}
</style>
