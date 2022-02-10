<template>
    <div>
      <el-row class="information-container">
        <el-Col :span="12">
          <div class="gold-txt">超级黄金会员</div>
          <div class="gold-ttxt">17602435151</div>
          <div class="gold-ttxt">2020年02月09日生效</div>
        </el-Col>
        <el-Col :span="12" class="gold-logo">
          <img :src="memberImg" width="60px"/>
        </el-Col>
      </el-row>
      <div class="right-gold">超级会员黄金版权益</div>
      <div class="member-list">
        <ul>
          <li v-for="member in memberData" :key="member.memberId">
            <span class="preferential-img"><img :src='member.storeImg' width="80px"/></span>
            <div class="right-txt">{{member.right}}</div>
            <div class="view-btn">{{member.receive}}</div>
          </li>
        </ul>
      </div>    
      <div class="open-btn" @click="handleMemberModal">立即开通 ></div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      memberData:[
        {memberId:1,storeImg:require('../../assets/liuliang.png'),right:"专属优惠卷",receive:'立即查看'},
        {memberId:2,storeImg:require('../../assets/reduction.png'),right:"配送费满减",receive:'立即查看'},
        {memberId:3,storeImg:require('../../assets/peisong.png'),right:"优先配送",receive:'立即查看'},
        {memberId:4,storeImg:require('../../assets/vip.png'),right:"生活权益",receive:'立即查看'},
      ],
      memberImg:require('../../assets/member.png')
    }
  },
  methods:{
    handleMemberModal(){
      this.$alert('您的会员已开通，让我们开始享受会员权益吧！', '会员开通', {
        confirmButtonText: '确定',
      });
    }
  }
}
</script>

<style scoped>
  .information-container{
    border: 2px solid #ccc;  
    margin: 20px 30px 0 50px ;  
    border-radius: 10px;
    background-color: #40404a;
    color: #e3cda8;
  }
  .gold-txt{
    color: #886742;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .gold-ttxt{
   margin-bottom: 7px;
  }
  .gold-logo{
    margin-top:15px;
  }
  .right-gold{
    color: #e3cda8;
    text-align: left;
    margin: 10px 0 0 54px;
  }
  .member-list{
    height: 200px;
    padding: 0px 30px 0px 10px;
   
  }
  .member-list ul li{
    list-style: none;
    width:24%;
    height: 200px;
    border:1px solid #E5E9F2;
    border-radius: 10px;
    float: left;
    margin: 2px;
    background-color: #40404a;
    padding-top: 20px;
  }
  
  .member-list li div{
      font-size: 13px;
      font-weight: 600;
  }
  .preferential-img{
    margin-top: 20px;
  }
  .right-txt{
    color: #e3cda8;
    margin-top: 20px;
  }
  .view-btn{
    margin: 0 auto;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border:2px solid #e3cda8;
    border-radius:8px;
    color:#e3cda8;
    margin-top: 10px;
  }
  .open-btn{
    margin: 0 auto;
    width: 400px;
    height: 80px;
    line-height: 80px;
    border:2px solid #e3cda8;
    border-radius:15px;
    color:#e3cda8;
    margin-top: 80px;
    font-size: 30px;
    font-weight: 600;
    background-color: #40404a;
  }
</style>