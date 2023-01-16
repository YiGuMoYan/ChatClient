<template>
  <el-container>
    <el-header class="aside-head">{{ account.name }}</el-header>
    <el-container>
      <el-aside class="aside-aside">
        <div class="icon" id="icon1" @click="setIndex(1)">
          <div>
            <el-icon :size="35">
              <ChatDotRound/>
            </el-icon>
          </div>
          <div>好友</div>
        </div>
        <div class="icon" id="icon2" @click="setIndex(2)">
          <div>
            <el-icon :size="35">
              <Message/>
            </el-icon>
          </div>
          <div>群聊</div>
        </div>
        <div class="icon" id="icon3" @click="setIndex(3)">
          <div>
            <el-icon :size="35">
              <Plus/>
            </el-icon>
          </div>
          <div>添加</div>
        </div>
        <div class="icon" id="icon4" @click="setIndex(4)">
          <div>
            <el-icon :size="35">
              <Tools/>
            </el-icon>
          </div>
          <div>设置</div>
        </div>
      </el-aside>
      <el-main class="aside-main">
        <el-scrollbar class="aside-main-scrollbar">
          <list-card v-for="item in accountList" :id="item" :key="item" class="list-card"/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ListCard from '@/components/Index/ListCard.vue'
import axios from 'axios'
import { getCurrentInstance } from 'vue'

export default {
  name: 'Aside',
  components: { ListCard },
  setup () {
    return getCurrentInstance()
  },
  mounted () {
    this.getAccount()
    this.getAccountList()
  },
  data () {
    return {
      account: {},
      accountList: [],
      index: 1
    }
  },
  methods: {
    getAccountList () {
      const that = this
      axios({
        url: that.$url + '/accountRelation/getAccountRelation',
        method: 'post',
        data: {
          token: that.$cookie.get('token')
        }
      }).then(function (res) {
        if (res.data.code === 200) {
          that.accountList = res.data.data
          console.log(that.accountList)
        } else {
          that.$message.error('登录异常，请重新登录')
          that.$route.push('/login')
        }
      })
    },
    getAccount () {
      const that = this
      axios({
        url: that.$url + '/account/getAccount',
        method: 'post',
        data: {
          token: this.$cookie.get('token')
        }
      }).then(function (res) {
        if (res.data.code === 200 && res.data.data) {
          that.account = res.data.data
        } else {
          that.$router.path('/login')
        }
      })
    },
    setIndex (id) {
      if (this.index !== id) {
        $('#icon' + this.index).css('background-color', 'initial')
        this.index = id
        $('#icon' + this.index).css('background-color', '#434343')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.aside-head {
  width: 100%;
  height: 10vh;
  font-size: 30px;
  font-weight: 600;
  line-height: 10vh;
  text-align: center;
  border-right: solid 1px #E8E8E8;
  border-bottom: solid 1px #E8E8E8;
}

.aside-aside {
  width: 20%;
  height: 90vh;
  background-color: #2E2E2E;
  color: white;
  padding: 15% 2% 2%;
  user-select: none;
  text-align: center;
  transition: all .1s;

  .icon {
    margin-bottom: 40px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 8px;
  }

  .icon:hover {
    cursor: pointer;
    background-color: #434343;
  }

  .icon:last-child {
    margin-bottom: 0;
  }

  #icon1 {
    background-color: #434343;
  }
}

.aside-main {
  padding: 0;
  border-right: solid 1px #E8E8E8;

  .aside-main-scrollbar {
    height: 90vh;
  }
}

</style>
