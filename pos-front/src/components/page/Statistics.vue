<template>
    <div>
      <el-Row>
        <el-Col :span="12">
          <div class="statistic-table">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="年度" width="150"></el-table-column>
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" width="120"></el-table-column>
              <el-table-column prop="name" label="产品名称" width="120"></el-table-column>
              <el-table-column prop="zip" label="销量" width="120"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-Col>
        <el-Col :span="12">
          <div class="data-visual" id="pillarChart"></div>
          <div class="data-visual" id="pieChart"></div>
          <div class="data-visual" id="lineChart"></div>
        </el-Col>
      </el-Row>
      
    </div>
</template>

<script>
export default {
  mounted() {
    this.setPillarChart();
    this.setPieChart();
    this.setLineCart();
  },
  data() {
      return {
        tableData: [
          {date: '2015-2016',name: '香辣鸡腿堡',province: '上海',city: '普陀区',zip: 8098809}, 
          {date: '2016-2017',name: '田园鸡腿堡',province: '北京',city: '海淀区',zip: 32132143}, 
          {date: '2017-2018',name: '和风汉堡',province: '沈阳',city: '和平区',zip: 200343533}, 
          {date: '2018-2019',name: '麦香鱼汉堡',province: '天津',city: '和平区',zip: 27657003},
          {date: '2019-2020',name: '香辣鸡腿堡',province: '西安',city: '经济开发区',zip: 9090093},
          {date: '2020-2021',name: '香辣鸡腿堡',province: '河北',city: '普陀区',zip: 78787978},
          {date: '2021-2022',name: '麦香鱼汉堡',province: '沈阳',city: '铁西区',zip: 66676869},
        ],
        goodsList:['汉堡','小食','饮料','套餐'],
        salesData:[169090,908098,9089089,299999]
      }
    },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    //柱状图
    setPillarChart(){
      let pillarChartDom = document.getElementById('pillarChart')
      let pillarChart = this.$echarts.init(pillarChartDom)

      let optionPillar = {
        backgroundColor: '#2c343c',
        xAxis: {
          type: 'category',
          data: ['汉堡', '小食', '饮料', '套餐', '汉堡+']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 110, 130],
            type: 'bar'
          }
        ]
      };

      pillarChart.setOption(optionPillar)
    },
    //饼图
    setPieChart(){
      let pieChartDom = document.getElementById('pieChart')
      let pieChart = this.$echarts.init(pieChartDom)

      let optionPie = {
        backgroundColor: '#2c343c',
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '汉堡' },
              { value: 310, name: '小食' },
              { value: 274, name: '饮料' },
              { value: 235, name: '套餐' },
              { value: 400, name: '汉堡+' }
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      };

      pieChart.setOption(optionPie)
    },
    //折线图
    setLineCart(){
      let lineChartDom = document.getElementById('lineChart')
      let lineChart = this.$echarts.init(lineChartDom)

      let optionLine = {
        backgroundColor: '#2c343c',
        xAxis: {
          type: 'category',
          data: ['汉堡', '小食', '饮料', '套餐', '汉堡+']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      };

      lineChart.setOption(optionLine);
    },
  }
  
}
</script>

<style scoped>
  .statistic-table{
    border: .0625rem solid #ccc;
    padding: .3125rem;
    border-radius: .625rem;
    margin: 1.875rem .625rem 0rem .9375rem;
  }
  .radar-map{
    border: .0625rem solid #ccc;
    margin: 1.875rem .625rem 0 0;
    border-radius: .625rem;
    height: 50rem;
  }
  .echarts-test {
      width: 12.5rem;
      height: 12.5rem;
  }
  .data-visual{
    border: 1px solid #ccc;
    margin: 30px 10px 0 5px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }
    
</style>