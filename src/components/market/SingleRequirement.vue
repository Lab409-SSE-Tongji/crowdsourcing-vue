<template lang="html">
  <div class="table">
    <div class="header">
      <template  v-if="getToken()">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">CrowdSourcing</el-menu-item>
          <el-menu-item index="2" @click="go()">我的主页</el-menu-item>
        </el-menu>
      </template>
      <template v-else>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">CrowdSourcing</el-menu-item>
          <el-menu-item index="2"><router-link to="/login">登录</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/register">注册</router-link></el-menu-item> 
        </el-menu>
      </template>
      
    </div>

    <div class="form-box">
      <el-form label-width="80px">
        <el-form-item label="需求名称">
          <el-input disabled="disabled" id="requirement_name" v-model="requirement['requirement_name ']"></el-input>
        </el-form-item>
        <el-form-item label="起止时间">
          <el-input disabled="disabled" id="start_time" v-model="requirement['start_time']"></el-input>
          <el-input disabled="disabled" id="end_time" v-model="requirement['end_time']"></el-input>
        </el-form-item>
        <el-form-item label="需求类型">
          <el-input disabled="disabled" id="requirement_type" v-model="requirement['requirement_type']"></el-input>
        </el-form-item>
        <el-form-item label="需求详情">
          <el-input disabled="disabled" id="requirement_detail" v-model="requirement['requirement_detail']"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div style="padding: 14px;" v-if="getToken() && requirement['is_enroll'] !== undefined">
      <el-button @click="enroll()" v-if="requirement['is_enroll']==false">报名</el-button>
      <el-button disabled="disabled" v-else>已报名</el-button>
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  import server from '../../../config/index';
  import router from '../../router/index.js';
  import { Message } from 'element-ui';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        url: server.url + '/api/requirement/' + this.$route.params.id,

        requirement: null,
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    created () {
      var that = this;
      axios.get(this.url, {'headers': {'Authorization': sessionStorage.getItem('token')}})
      .then(function(response) {
        if(response.data.status==200){
          var date = new Date();
          date.setTime(response.data.result['start_time']);
          response.data.result['start_time'] = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
          date.setTime(response.data.result['end_time']);
          response.data.result['end_time'] = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();

          that.requirement = response.data.result;

        } else {
          console.log(response.data.status);
        }

      }).catch(function (error) {
        console.log(error);
      });

    },
    methods: {
      go() {
        window.location.href= '/';
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getToken() {
        if (sessionStorage.getItem('token') != null)
          return true;
        else 
          return false;
      },
      enroll() {
        var enroll_url = this.url + '/enroll';

        axios.post(enroll_url, {}, {'headers': {'Authorization': sessionStorage.getItem('token')}})
        .then(function(response) {
          if(response.data.status==200){
            router.go(0);
            Message.success("报名成功！");
          }else {
            Message.fail("报名失败！")
            console.log(response.data.status);
          }

        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="css">
.el-row{
  margin-top: 1%;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.el-button {
  padding: .5rem .5rem .5rem .5rem;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
#project_type{
  float:right;
}
</style>
