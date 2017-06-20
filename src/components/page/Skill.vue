<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 技能展示</el-breadcrumb-item>
                <el-breadcrumb-item>我的技能</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-title">项目展示</div>
        <hr>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="projectName" class="projectName"label="项目名称" width="120">
            </el-table-column>
            <el-table-column prop="projectAddress" label="项目地址" width="280">
            </el-table-column>
            <el-table-column prop="projectRegion" label="项目类型" width="120" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="projectText" label="项目描述" width="280">
            </el-table-column>
        </el-table>
        <!-- <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="项目名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="项目分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                        <el-form-item label="项目地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="项目描述">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="项目名称"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="项目分类"
                    prop="category">
            </el-table-column>
            <el-table-column
                    label="项目地址"
                    prop="address">
            </el-table-column>
        </el-table> -->
        <!-- <div class="content-title">证书展示</div>
        <hr>
        <el-row>
          <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="/static/img/img.jpg" class="image">
              <div style="padding: 14px;">
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">删除</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row> -->
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
                url: server.url + '/api/user/projectExperience',

                tableData: null,
            }
        },
        created() {
            var that = this;
            axios.get(this.url, {'headers': {'Authorization': sessionStorage.getItem('token')}})
            .then(function(response) {
              if(response.data.status==200){
                that.tableData = response.data.result;
                console.log(that.tableData);
              } else {
                console.log(response.data.status);
              }

            }).catch(function (error) {
              console.log(error);
            });
        }
    }
</script>
<style>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    hr{
        margin:.8em 0 1em;
        display:block;
        height:1px;
        border:0;
        border-top:1px solid #f4f4f4;
        padding:0;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 100px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 60%;
    }

    .time {
    font-size: 13px;
    color: #999;
    }

    .bottom {
      margin-top: 5%;
      line-height: 12px;
    }

    .button {
      padding: 0;
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

</style>
