<template>
    <div class="left-sider">
      <el-menu
        default-active="goods"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="pos">
          <i class="el-icon-collection"></i>
          <span slot="title">收银</span>
        </el-menu-item>
        <el-menu-item index="store">
          <i class="el-icon-s-shop"></i>
          <span slot="title">店铺</span>
        </el-menu-item>
        <el-menu-item index="goods">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品</span>
        </el-menu-item>
        <el-menu-item index="member">
          <i class="el-icon-s-custom"></i>
          <span slot="title">会员</span>
        </el-menu-item>
        <el-menu-item index="statistics">
          <i class="el-icon-coin"></i>
          <span slot="title">统计</span>
        </el-menu-item>
        <el-menu-item index="improvements">
          <i class="el-icon-document"></i>
          <span slot="title">改进意见</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name:'leftSlider',
        data(){
            return{}
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
  .left-sider{
    color: #fff;
    font-size: 10px;
    background-color: #545c64;
    height: 100%;
    float: left;
    width:15%;
  }
  .el-menu-vertical{
    margin-left: -30px;
  }
</style>