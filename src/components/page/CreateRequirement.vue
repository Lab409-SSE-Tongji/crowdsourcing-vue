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
                      <el-date-picker
                        style="width:100%"
                        v-model="form.start_time"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0"
                        :format="yyyy-MM-dd">
                      </el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11" >
                      <el-date-picker
                        style="width:100%"
                        v-model="form.end_time"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0"
                        :format="yyyy-MM-dd">
                      </el-date-picker>
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
                    id="upload"
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
import { Message } from 'element-ui';
export default {
        data: function(){
            return {
              pickerOptions0: {
                 disabledDate(time) {
                   return time.getTime() < Date.now() - 8.64e7;
                 }
               },
                url: server.url + '/api/requirement',

                form: {
                    requirement_name: '',
                    requirement_type: '',
                    start_time: '',
                    end_time: '',
                    need_manager: '1',
                    requirement_detail: '',
                }
            }
        },
        methods: {
            onSubmit() {
              var sd = new Date(this.form.start_time);
              var sdd = sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate();
              var ed = new Date(this.form.end_time);
              var edd = ed.getFullYear() + '-' + (ed.getMonth() + 1) + '-' + ed.getDate();

              var form = new FormData();
              form.append("requirement_name",this.form.requirement_name);
              form.append("requirement_type",this.form.requirement_type);
              form.append("start_time",sdd);
              form.append("end_time",edd);
              form.append("need_manager",1);
              form.append("requirement_detail",this.form.requirement_detail);
              // axios.post(this.url, {'headers': {'authorization': sessionStorage.getItem('token')}, 'data': this.info})
              axios.post(this.url, form, {'headers': {'Authorization': sessionStorage.getItem('token')}})
              .then(function(response) {
                if(response.data.status==201){
                  // store.commit('setToken', {token: response.data.result.token});
                  // sessionStorage.setItem("token", response.data.result.token);
                  // alert(sessionStorage.getItem('token'));
                  router.push('create_requirement');
                  Message.success("新建需求成功！")
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
