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
      <el-carousel :interval="5000" arrow="always" height="500px">
        <el-carousel-item v-for="item in 2" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="project">
      <el-row :gutter="20">
        <el-col  :span="4" v-for="requirement in requirements">
          <el-card >
            <img src="static/img/img.jpg" class="image">
            <div style="padding: 14px;">
               <span id="project_id">项目编号：{{requirement.requirement_id}}</span>
               <div class="">
                 <span id="project_name">{{requirement.requirement_name}}</span>
               </div>
               <div class="clearfix">
                 <span id="proposer">报名人数</span>
               </div>
               <div class="bottom">
               <el-button><router-link :to="{name: 'publicSingleRequirement', params:{id: requirement.id}}">查看详情</router-link>></el-button>
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
  padding: 0;
}
.header{
  top: 0;
}
.el-row{
margin-left: 10px;
margin-right: 10px;
}
.el-card{
  margin-top: 1em;
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
  width: 80%;
  height: 80%;
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

.router-link {
    text-decoraction: none;
}

.router-link-active {
    text-decoration: none;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("/static/img/header_one.jpg");
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("/static/img/header_two.jpg");
    max-width: 100%;

  }
  </style>
