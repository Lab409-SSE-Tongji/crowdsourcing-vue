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
                    <el-input v-model="form.requirement_name"></el-input>
                </el-form-item>

                <el-form-item label="起止时间">
                    <el-col :span="11" >
                        <el-date-picker  type="date" placeholder="选择日期" v-model="form.start_time" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11" >
                        <el-date-picker  type="date" placeholder="选择日期" v-model="form.end_time" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="项目类型">
                    <el-select v-model="form.requirement_type" placeholder="请选择">
                        <el-option label="ios" value="ios"></el-option>
                        <el-option label="android" value="android"></el-option>
                        <el-option label="web" value="web"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目经理">
                    <el-switch on-text="" off-text="" v-model="form.need_manager"></el-switch>
                </el-form-item>
                <el-form-item label="项目简介">
                    <el-input type="textarea" v-model="form.requirement_detail"></el-input>
                </el-form-item>

                <el-form-item label="附件上传">
                  <el-upload
                    class="upload-demo"
                    ref="upload"
                    action=""
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <!-- <el-button @click="resetForm('')">重置</el-button> -->
                </el-form-item>
            </el-form>

        </div>

    </div>
</template>

<script>
import "../../common/animate-custom.css";
import axios from 'axios';
import server from '../../../config/index';
import router from '../../router/index.js';
import store from '../../vuex/store.js';
    export default {
        data: function(){
            return {
                url: server.url + '/api/requirement',

                form: {
                    requirement_name: '',
                    requirement_type: '',
                    start_time: '',
                    end_time: '',
                    need_manager: '1',
                    requirement_detail: '',
                },
                info:{
                  requirement_name: 'test',
                  requirement_type: 'ios',
                  start_time: '2017-5-6',
                  end_time: '2065-8-9',
                  need_manager: 1,
                  requirement_detail: 'test',
                }
            }
        },
        methods: {
            onSubmit() {
              // axios.post(this.url, {'headers': {'authorization': sessionStorage.getItem('token')}, 'data': this.info})
              axios.post(this.url, this.info, {'headers': {'Authorization': sessionStorage.getItem('token')}})
              .then(function(response) {
                if(response.data.status==201){
                  // store.commit('setToken', {token: response.data.result.token});
                  // sessionStorage.setItem("token", response.data.result.token);
                  // alert(sessionStorage.getItem('token'));
                  router.push('create_requirement');
                  this.$message.success('提交成功！');
                  // alert(store.getters.token);
                  //
                }else {
                  console.log(response.data.status);
                }

              }).catch(function (error) {
                console.log(error);
              });

            },
            resetForm(formName) {
              this.$refs[formName].resetFields();
            }
        }
    }
</script>
