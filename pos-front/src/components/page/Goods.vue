<template>
    <div class="goods-container">
       <el-row >
            <el-col :span='9'>
                <el-tabs class="goods-order" id="order-list">
                    <el-tab-pane label="点餐" class="order-item">
                      <el-table border :data="tableData">
                        <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                        <el-table-column prop="goodsCount" label="商品数量"></el-table-column>
                        <el-table-column prop="goodsPrice" label="商品金额"></el-table-column>
                        <el-table-column label="操作" >
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="handleDelList(scope.row)">删除</el-button>
                                <el-button type="text" size="small" @click="handleAddList(scope.row)">增加</el-button>
                            </template>
                        </el-table-column>                        
                      </el-table> 
                      <div class="tag-color">
                          <el-tag type="success">总数量为：{{totalCount || 0}}份</el-tag>
                          <el-tag type="danger">总金额为：{{totalMoney || 0}}元</el-tag>
                      </div>
                      <div class="order-btn">
                        <el-popconfirm title="确定要删除所有商品吗？"  icon="el-icon-info" icon-color="red" @confirm="handleAllDelList">
                            <el-button type="danger" slot="reference">删除</el-button>
                        </el-popconfirm>
                        <el-button type="success" @click="handlePos">结账</el-button>
                      </div>  
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                    挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                    外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <!--商品展示-->
            <el-col :span="15">
              <div class="often-goods">
                  <div class="title">常用商品</div>
                  <div class="oftenGoods-list">
                      <ul>
                          <li v-for="goods in oftenGoods" :key='goods.goodsId' @click="handleAddList(goods)">
                            <span>{{goods.goodsName}}</span>
                            <span class="often-price">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="goods-type">
                  <el-tabs class="type-order">
                      <el-tab-pane label="汉堡">
                          <div class="cook-list">
                              <ul>
                                  <li v-for="goods in typeHamburgs" :key="goods.goodsId" @click="handleAddList(goods)">
                                      <span class="food-img"><img :src="goods.goodsImg" width="100%" height="150px"/></span>
                                      <span class="food-name">{{goods.goodsName}}</span>
                                      <span class="food-price">￥{{goods.price}}元</span>
                                  </li>
                              </ul>
                          </div>
                      </el-tab-pane>
                      <el-tab-pane label="小食">
                          <div class="cook-list">
                              <ul>
                                  <li v-for="goods in typeSnacks" :key="goods.goodsId" @click="handleAddList(goods)">
                                      <span class="food-img"><img :src="goods.goodsImg" width="100%" height="150px"/></span>
                                      <span class="food-name">{{goods.goodsName}}</span>
                                      <span class="food-price">￥{{goods.price}}元</span>
                                  </li>
                              </ul>
                          </div>
                      </el-tab-pane>
                      <el-tab-pane label="饮料">
                           <div class="cook-list">
                              <ul>
                                  <li v-for="goods in typeDrinks" :key="goods.goodsId" @click="handleAddList(goods)">
                                      <span class="food-img"><img :src="goods.goodsImg" width="100%" height="150px"/></span>
                                      <span class="food-name">{{goods.goodsName}}</span>
                                      <span class="food-price">￥{{goods.price}}元</span>
                                  </li>
                              </ul>
                          </div>
                      </el-tab-pane>
                      <el-tab-pane label="套餐">
                           <div class="cook-list">
                              <ul>
                                  <li v-for="goods in typePackages" :key="goods.goodsId" @click="handleAddList(goods)">
                                      <span class="food-img"><img :src="goods.goodsImg" width="100%" height="150px"/></span>
                                      <span class="food-name">{{goods.goodsName}}</span>
                                      <span class="food-price">￥{{goods.price}}元</span>
                                  </li>
                              </ul>
                          </div>
                      </el-tab-pane>
                  </el-tabs>
              </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData: [],
                totalCount:0,
                totalMoney:0,
                oftenGoods: [],
                typeHamburgs:[
                  {goodsId:1,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191431284513.png",goodsName:'香辣鸡腿堡',price:18}, 
                  {goodsId:2,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191441213571.png",goodsName:'田园鸡腿堡',price:15}, 
                  {goodsId:3,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191445351148.png",goodsName:'和风汉堡',price:15},
                  {goodsId:4,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191442536617.png",goodsName:'麦香鱼汉堡',price:80}, 
                  {goodsId:5,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/10/202010121523342804.png",goodsName:'巨无霸汉堡',price:10}, 
                  {goodsId:6,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191442536617.png",goodsName:'双层芝士汉堡',price:20}, 
                  {goodsId:7,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/11/202111031418104692.png",goodsName:'厚培根汉堡',price:10}, 
                  {goodsId:8,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191446258631.png",goodsName:'雪顶汉堡',price:18}, 
                  {goodsId:9,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270940031690.png",goodsName:'鸡米花汉堡',price:15}, 
                  {goodsId:10,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104261601503435.png",goodsName:'鸡柳汉堡',price:17}
                ],
                typeSnacks:[
                  {goodsId:1,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191433067178.png",goodsName:'薯角',price:18}, 
                  {goodsId:2,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191438226276.png",goodsName:'琵琶腿',price:15}, 
                  {goodsId:3,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191433289748.png",goodsName:'麦香鸡翅',price:15},
                  {goodsId:4,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/10/201510282055166446.png",goodsName:'玉米杯',price:80}, 
                  {goodsId:5,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270940173811.png",goodsName:'薯条',price:10}, 
                  {goodsId:6,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191433146156.png",goodsName:'麦乐鸡',price:20}, 
                  {goodsId:7,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2019/08/201908131737148079.png",goodsName:'苹果片',price:10}, 
                  {goodsId:8,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/10/201510282055166446.png",goodsName:'玉米粒',price:18}, 
                  {goodsId:9,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191555596695.png",goodsName:'麦麦脆汁鸡',price:15}, 
                  {goodsId:10,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2017/09/201709121712579051.png",goodsName:'鲜蔬杯',price:17}
                ],
                typeDrinks:[
                  {goodsId:1,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191417454534.png",goodsName:'椰子水',price:18}, 
                  {goodsId:2,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270940331482.png",goodsName:'可口可乐',price:15}, 
                  {goodsId:3,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191452306697.png",goodsName:'雪碧',price:15},
                  {goodsId:4,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/06/202006171817102529.png",goodsName:'苹果汁',price:80}, 
                  {goodsId:5,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191451424311.png",goodsName:'阳光橙',price:10}, 
                  {goodsId:6,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2016/02/201602171846327169.png",goodsName:'优质豆浆',price:20}, 
                  {goodsId:7,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191453303469.png",goodsName:'柠檬红茶',price:10}, 
                  {goodsId:8,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/10/202110201035364530.png",goodsName:'鲜煮咖啡',price:18}, 
                  {goodsId:9,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061813048606.png",goodsName:'热朱古力',price:15}, 
                  {goodsId:10,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061823032589.png",goodsName:'锡兰红茶',price:17}
                ],
                typePackages:[
                  {goodsId:1,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171124498759.png",goodsName:'全家桶A',price:18}, 
                  {goodsId:2,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171125302094.png",goodsName:'全家桶B',price:15}, 
                  {goodsId:3,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171126285071.png",goodsName:'全家桶C',price:15},
                  {goodsId:4,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191545314313.png",goodsName:'全家桶D',price:80}, 
                  {goodsId:5,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171129547057.png",goodsName:'全家桶E',price:10}, 
                  {goodsId:6,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191549025113.png",goodsName:'全家桶F',price:20}, 
                  {goodsId:7,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171124498759.png",goodsName:'全家桶G',price:10}, 
                  {goodsId:8,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191456165259.png",goodsName:'全家桶H',price:18}, 
                  {goodsId:9,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171125302094.png",goodsName:'全家桶I',price:15}, 
                  {goodsId:20,goodsImg:"https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171126285071.png",goodsName:'全家桶J',price:17}
                ],
            }
        },
        mounted:function(){
            let orderHeight=document.body.clientHeight;
            document.getElementById("order-list").style.height=orderHeight+'px'

            //获取常用商品
            this.$axios.get('http://127.0.0.1:7001/getOftenGoods').then((res) => {
                this.oftenGoods = res.data.data
            })
            //获取商品数据
            this.$axios.get('http://127.0.0.1:7001/getOftenGoods').then((res) => {
                this.oftenGoods = res.data.data
            })
        },
        methods:{
            handleAddList(goods){
                //商品是否已存在订单列表
                this.totalCount = 0;
                this.totalMoney = 0;
                let isExist = false;
                this.tableData.forEach(item => {
                    if(item.goodsName === goods.goodsName){
                        isExist = true 
                    } 
                })

                if(isExist){
                    let arr = this.tableData.filter(item => {
                            return item.goodsName === goods.goodsName
                        })                    
                    arr[0].goodsCount++
                } else {
                    let newGoods = {goodsId:goods.id,goodsName:goods.goodsName,goodsPrice:goods.price,goodsCount:1}
                    this.tableData.push(newGoods) 
                }

                this.tableData.forEach((item) => {
                    this.totalCount += item.goodsCount
                    this.totalMoney += item.goodsPrice * item.goodsCount
                })
            },
            handleDelList(row){
                this.tableData.forEach((item,index) => {
                    if(item.goodsName === row.goodsName){
                        if(row.goodsCount > 1){
                            row.goodsCount--
                        } else {
                            this.tableData.splice(index,1)
                        }
                    } 
                })
                
            },
            handleAllDelList(){   
                this.tableData = []
            },
            handlePos(){
                this.$router.push({path:'/pos',query:{tableData:this.tableData}})
            }
        }
    }
</script>

<style scoped>
  .goods-order{
      background-color: #F9FAFC;
      border-right: 1px solid #C0CCCA;
      height: 100%;
      padding: 5px;
  }
  .tag-color{
      margin-top: 20px;
  }
  .order-btn{
      margin-top:15px
  }
  .title{
      height: 42px;
      border-bottom: 2px solid #D3dce6;
      background-color: #F9FAFC;
      text-align: left;
      line-height: 42px;
      margin-left: 10px;
  }
  .oftenGoods-list ul li {
      list-style: none;
      float: left;
      border: 1px solid #E5E9F2;
      padding: 10px;
      margin: 10px;
      background-color: #fafafa;
      border-radius: 10px;
  }
  .often-price{
    color: #58B7FF;
  }
  .goods-type{
    clear: both;
  }
  .type-order{
      padding: 10px;
  }
  .cook-list{
      height: 200px;
  }
  .cook-list ul li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       overflow: hidden;
       background-color:#fafafa;      
       border-radius: 10px;
       float: left;
       margin: 2px;
   }
   .cook-list li span{
       font-size: 13px;
   }
   .food-img{
       width: 40%;
   }
   .food-name{
       font-size: 18px;
       padding-left: 10px;
       color:brown;

   }
   .food-price{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
       color: #58B7FF;
   }
</style>