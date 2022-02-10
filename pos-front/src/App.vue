<template>
  <div id="app">
    <!-- 左侧导航 -->
      <Sider></Sider>
    <!-- 操作区域 -->
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sider from '@/components/common/Sider'
export default {
  name: 'App',
  components:{
    Sider,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* display: flex; */
}
.main{
  float: left;
  width: 85%;
  /* background-color: #EFF2F7; */
  height: 100%;
  overflow: auto;
}
</style>
