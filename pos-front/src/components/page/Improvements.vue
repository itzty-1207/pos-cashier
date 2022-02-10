<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="90px">
      <el-Row>
        <el-Col :span="10">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-Col>
      </el-Row>
      <el-Row>
        <el-Col :span="6">
          <el-form-item label="所在区域">
            <el-select v-model="form.region" placeholder="请选择所在区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-Col>
      </el-Row>
      <el-Row>
        <el-Col :span="15">
          <el-form-item label="消费时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
       </el-Col>
      </el-Row>
      <el-Row>
        <el-Col :span="2">
          <el-form-item label="是否匿名">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
       </el-Col>
      </el-Row>
      <el-Row>
        <el-Col :span="12">
          <el-form-item label="希望改进">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-Col>
      </el-Row>
      <el-Row>
        <el-Col :span="7">
          <el-form-item label="要求赞助">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-Col>
      </el-Row>
      <el-form-item label="意见或建议">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)">立即提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit(form) {
        console.log(form,'submit!');
      }
    }
  }
</script>

<style scoped>
  .form-container{
    border: 1px solid #ccc;
    padding: 30px;
    margin: 20px;
    border-radius:20px
  }
</style>