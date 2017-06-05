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
        <el-table
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
        </el-table>
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
    export default {
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: 'Crowdsourcing',
                    category: 'Vue',
                    desc: '用vue.js重构原来的项目',
                    address: 'https://github.com/breeswish/php-marked',
                }, {
                    id: '12987123',
                    name: '666',
                    category: 'Web',
                    desc: '这是一个很厉害的项目',
                    address: 'https://github.com/Lab409-SSE-Tongji/WebGIS-BackEnd',
                }, {
                    id: '12987125',
                    name: 'Test',
                    category: 'IOS',
                    desc: '一个测试用的项目',
                    address: 'https://github.com/Lab409-SSE-Tongji/crowdsourcing-front',
                }, {
                    id: '12987126',
                    name: 'Hello',
                    category: 'Android',
                    desc: 'Hello World!',
                    address: 'https://github.com/alibaba/weex',
                }],
                dialogImageUrl: '',
                dialogVisible: false,
                currentDate: new Date()
            }
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


</style>
