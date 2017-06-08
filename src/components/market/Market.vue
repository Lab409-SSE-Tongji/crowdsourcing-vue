<template>
  <div class="content">
    <div class="header">
      <template  v-if="getToken()">
        <el-menu :default-active="activeIndex1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">CrowdSourcing</el-menu-item>
          <el-menu-item index="2"><router-link to="readme">我的主页</router-link></el-menu-item>
        </el-menu>
      </template>
      <template v-else>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">CrowdSourcing</el-menu-item>
          <el-menu-item index="2"><router-link to="login">登录</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="register">注册</router-link></el-menu-item>
        </el-menu>
      </template>
    </div>
    <div class="project">
      <el-row :gutter="20">
        <el-col  :span="4" v-for="requirement in requirements">
          <el-card >
            <img src="static/img/img.jpg" class="image">
            <div style="padding: 14px;">
               <span id="project_id">项目编号：{{requirement.requirement_id}}</span>
               <div class="clearfix">
                 <span id="project_name">{{requirement.requirement_name}}</span>
               </div>
               <div class="bottom">
                 <span id="proposer">报名人数</span>
                 <el-button type="text" class="button">操作按钮</el-button>
               </div>
           </div>
          </el-card>
        </el-col>
      </el-row>
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
          url: server.url + '/api/requirements',

          requirements: null,
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      created () {
        var that = this;
        axios.get(this.url)
        .then(function(response) {
          if(response.data.status==200){
            that.requirements = response.data.result;
          } else {
            console.log(response.data.status);
          }

        }).catch(function (error) {
          console.log(error);
        });

      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        getToken() {
          if (sessionStorage.getItem('token') != null)
            return true;
          else
            return false;
        }
      }
  }
</script>

<style lang="css">
.content{
  top: 0;
  left: 0;
  overflow-y:auto;
}
.header{
  top: 0;
}
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
