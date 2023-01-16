<template>
  <div class="account-message">
    <div class="display">
      <span class="message"> <p>{{message}}</p> </span>
      <span class="head">
        <el-avatar> {{ name[0] }} </el-avatar>
      </span>
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
  display: inline-block;
  width: 100%;

  .display {
    height: 100%;
    float: right;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;

    span {
      display: inline-block;
    }

    .head {
      user-select: none;

      .el-avatar {
        text-align: center;
        border-right: 1px solid var(--el-border-color);
        font-size: 28px;
      }
    }

    .message {
      position: relative;
      height: 100%;
      margin-right: 20px;
      max-width: 50%;
      background-color: #89D961;
      border-radius: 10px;
      padding: 0 15px;
      word-wrap: break-word;
      word-break: break-word;
      line-height: 28px;
    }
  }
}
</style>
