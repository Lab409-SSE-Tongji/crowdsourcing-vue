<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form label-width="80px">
                <el-form-item label="需求名称">
                    <el-input v-model="tableData.requirementName" disabled="disabled"></el-input>
                </el-form-item>

                <el-form-item label="起止时间">
                    <el-col :span="11" >
                      <el-date-picker
                        style="width:100%"
                        v-model="tableData.start_time"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0"
                        :format="yyyy-MM-dd"
                        disabled="disabled">
                      </el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11" >
                      <el-date-picker
                        style="width:100%"
                        v-model="tableData.end_time"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0"
                        :format="yyyy-MM-dd"
                        disabled="disabled">
                      </el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="项目类型">
                  <el-select v-model="tableData.requirementType" placeholder="tableData.requirementType"   disabled="disabled">
                      <el-option label="ios" value="ios"></el-option>
                      <el-option label="android" value="android"></el-option>
                      <el-option label="web" value="web"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="项目经理">
                    <el-switch on-text="" off-text="" v-model="tableData.need_manager"   disabled="disabled"></el-switch>
                </el-form-item>
                <el-form-item label="项目简介">
                    <el-input type="textarea" v-model="tableData.requirement_detail"   disabled="disabled"></el-input>
                </el-form-item>


                  <el-button type="primary" icon="edit">编辑</el-button>
                  <el-button type="primary" icon="delete" @click="handleDelete">删除</el-button>
            </el-form>

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
            url: server.url + '/api/requirement/' +  this.$route.params.id,
            tableData: null,
            currentPage1: 1
        }
    },
    created () {
      var that = this;
      axios.get(this.url, {'headers': {'Authorization': sessionStorage.getItem('token')}})
      .then(function(response) {
        if(response.data.status==200){
          that.tableData = response.data.result;
          console.log(response.data);
        } else {
          console.log(response.data.status);
        }

      }).catch(function (error) {
        console.log(error);
      });

    },
    methods: {

      handleDelete() {
        var url_operation = server.url + '/api/requirement/' + this.$route.params.id
        console.log(url_operation);

        axios.delete(url_operation, {'headers': {'Authorization': sessionStorage.getItem('token')}})
        .then(function(response) {
          if(response.data.status==200){
            router.push('/requirement');
            Message.success("删除需求成功！")
          }else {
            console.log(response.data.status);
          }

        }).catch(function (error) {
          console.log(error);
        });
      },
      sizeChange: function (pageSize) {
         this.pageSize = pageSize;
         this.fetchData();
     },
     pageIndexChange: function (pageIndex) {
         this.pageIndex = pageIndex;
         this.fetchData();
     }
    }

}</script>
