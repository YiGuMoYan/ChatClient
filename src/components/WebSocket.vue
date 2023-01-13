<template>
  <div>WebSocket</div>
</template>

<script>
export default {
  mounted () {
    this.init()
  },
  data () {
    return {
      webSocketUrl: 'ws://127.0.0.1:8080/login/1613829011638091778',
      socket: ''
    }
  },
  methods: {
    init () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持')
      } else {
        this.socket = new WebSocket(this.webSocketUrl)
        this.socket.onopen = this.open
        this.socket.onerror = this.error
      }
    },
    open () {
      console.log('连接成功')
    },
    error () {
      console.log('连接错误')
    }
  }
}
</script>

<style scoped>

</style>
