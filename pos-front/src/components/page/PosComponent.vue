<template>
    <div class="pos-container">
       <el-row class="pos-header">
           <el-col :span='10' class="pos-logo">
               <span class="logo-img">
                    <img :src='logoImg' width="80px" height="80px"/>
                    <span class="logo-txt">
                        <span>POS</span>
                        <span>结算页</span>
                    </span>
                </span>
           </el-col>
           <el-col :span='14' class="pos-step">
               <el-steps :active="active" finish-status="success" align-center>
                    <el-step title="填写核对订单信息"></el-step>
                    <el-step title="成功提交订单"></el-step>
                </el-steps> 
           </el-col>
       </el-row>
       <div>
           <el-card class="box-card">
                <div slot="header" class="clearfix">收货人信息</div>
                <div class="delivery">
                  <span>收货人姓名：<span>帅气男孩</span></span>
                  <span class="deliver-txt">收货人地址：<span>北京市石景山区石景山科技园实兴大街</span></span>
                  <span class="deliver-txt">收货人电话：<span>17602425151</span></span>
                </div>
                
           </el-card>
           <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>支付方式</span>
                </div>
                <el-radio-group v-model="radio1" class="pay-term">
                  <el-radio-button label="货到付款"></el-radio-button>
                  <el-radio-button label="线上支付"></el-radio-button>
                </el-radio-group>
           </el-card>
           <el-card class="box-card">
              <div slot="header" class="clearfix">
                  <span>送货清单</span>
              </div>
              <el-empty :image-size="50" v-if="!this.$route.query.tableData"></el-empty>
              <div class="delivery-list" v-for="goods in (this.$route.query.tableData || [])" :key="goods.goodsName">
                <div class="delivery-img"><img :src='deliveryImg' width="120px" height="120px"/></div>
                <div class="goods-txt1">商品名称：{{goods.goodsName}}</div>
                <div class="goods-txt1">
                  <span>单价：{{goods.goodsPrice}}</span>
                  <span class="goods-txt2">数量：{{goods.goodsCount}}</span>
                </div>
              </div>
           </el-card>
           <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>发票信息</span>
                </div>
                <div class="pay-term">
                  <span>电子普通发票：</span>
                  <span>
                    <el-radio v-model="radio2" label="1">个人</el-radio>
                    <el-radio v-model="radio2" label="2">公司</el-radio>
                  </span>
                </div>
           </el-card>
       </div>
       <div class="pay-container">
           <div>总商品金额：￥{{10000.00}}元</div>
           <div class="pay-txt">运费：￥0.00元</div>
           <el-button type="danger" round class="submit-btn" @click="handleAddActive">提交订单</el-button>
       </div>
    </div>
</template>

<script>
  export default {
    data(){
        return {
            logoImg:require('../../assets/logo.png'),
            active: 1,
            radio1: '线上支付',
            radio2: '1',
            deliveryData:[],
            deliveryImg:'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171124498759.png'
        }
    },
    mounted: function () {
      console.log(this.$route.query.tableData);
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      handleAddActive(){
        this.active++
        this.$alert('您已成功提交订单，坐等快递签收吧！', '提交订单', {
          confirmButtonText: '确定',
        });
      }
    }
  }
</script>

<style scoped>
  .pos-header{
      padding: 10px;
  }
  .logo-img{
      margin-left: -300px;
  }
  .logo-txt{
      color: #444444;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 15px;
  }
  .pos-step{
      padding: 30px 0 10px 250px;
  }
  .clearfix{
    float: left;
    color: #333333;
    font-weight: 600;
  }
 .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .box-card {
    margin: 0 40px;
  }
  .delivery-list{
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 290px;
    height: 180px;
    background-color: #fafafa;
    color: #666666;
    font-size: 12px;
    float: left;
    margin: 0 10px 5px 2px;
  }
  .delivery-img{
    margin-top: 5px;
    border-radius: 5px;
    overflow: hidden;
  }
  .goods-txt1{
    margin-top: 10px;
  }
  .goods-txt2{
    margin-left: 10px;
  }
  .pay-term{
    float: left;
    margin: 5px 0 20px 0;
  }
  .pay-txt{
    margin-top: 5px;
  }
  .deliver-txt{
    margin-left: 10px;
  }
  .pay-container{
    margin: 20px 100px 20px 0;
    float: right;
    color: #333333;
    font-size: 12px;
  }
  .submit-btn{
    margin-top: 20px;
  }
  .delivery{
    float: left;
    padding: 10px 0 20px 0;
    font-size: 12px;
  }
</style>