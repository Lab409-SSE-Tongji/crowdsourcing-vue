<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>技能展示</el-breadcrumb-item>
                <el-breadcrumb-item>新增技能</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- <div class="content-title">上传图片(可选)</div>
        <hr>
        <img class="pre-img" :src="src" alt="">
        <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
                               :crop="true"
                               text="上传图片"
                               url="/api/posts/"
                               extensions="png,gif,jpeg,jpg"
                               @:imageuploaded="imageuploaded"
                               @:errorhandle="handleError"></vue-core-image-upload>
        <hr> -->
        <div class="content-title">新增项目经历</div>
        <hr>
        <el-form :label-position="labelPosition" ref="form" label-width="8em" :model="form" :rules="rules">
          <el-form-item label="项目名称" prop="name">
            <el-input v-model="form.name" ></el-input>
          </el-form-item>
          <el-form-item label="项目类型" prop="region">
              <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="ios" value="ios"></el-option>
                  <el-option label="android" value="android"></el-option>
                  <el-option label="web" value="web"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="项目地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="项目简介" prop="text">
              <el-input type="textarea" rows="4" v-model="form.text"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit('form')">提交</el-button>
              <el-button @click="resetForm('form')">清空输入</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
import "../../common/animate-custom.css";
import axios from 'axios';
import server from '../../../config/index';
import router from '../../router/index.js';
import { Message } from 'element-ui';
export default {
        data: function(){
            return {
                url: server.url + '/api/user/projectExperience',

                form: {
                  name: '',
                  region: '',
                  address: '',
                  text:''
                },
                rules: {
                    name: [
                      { required: true, message: '请输入项目名称', trigger: 'blur' },
                      { min: 1, max: 30, message: '长度在 0 到 10 个字符', trigger: 'blur' }
                    ],
                    region: [
                      { required: true, message: '请选择项目类型', trigger: 'change' }
                    ],
                    address: [
                      { required: true, message: '请填写项目地址', trigger: 'blur' },
                      { min: 1, max: 30, message: '长度在 0 到 10 个字符', trigger: 'blur' }
                    ],
                    text: [
                      { required: true, message: '请填写项目简介', trigger: 'blur' },
                      { min: 1, max: 200, message: '小于100字', trigger: 'blur' }
                    ]
                  }
            }
        },
        methods: {
            resetForm(formName) {
              this.$refs[formName].resetFields();
            },
            onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                var form = new FormData();
                form.append("project_name",this.form.name);
                form.append("project_region",this.form.region);
                form.append("project_address",this.form.address);
                form.append("project_text",this.form.text);

                // axios.post(this.url, {'headers': {'authorization': sessionStorage.getItem('token')}, 'data': this.info})
                axios.post(this.url, form, {'headers': {'Authorization': sessionStorage.getItem('token')}})
                .then(function(response) {
                  if(response.data.status==201){
                    // store.commit('setToken', {token: response.data.result.token});
                    // sessionStorage.setItem("token", response.data.result.token);
                    // alert(sessionStorage.getItem('token'));
                    router.push('skillupload');
                    Message.success("新建项目经历成功！")
                    // alert(store.getters.token);
                    //
                  }else {
                    console.log(response.data.status);
                  }

                }).catch(function (error) {
                  console.log(error);
                });

              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
            // onSubmit() {
            //   var form = new FormData();
            //   form.append("project_name",this.form.name);
            //   form.append("project_region",this.form.region);
            //   form.append("project_address",this.form.address);
            //   form.append("project_text",this.form.text);
            //
            //   // axios.post(this.url, {'headers': {'authorization': sessionStorage.getItem('token')}, 'data': this.info})
            //   axios.post(this.url, form, {'headers': {'Authorization': sessionStorage.getItem('token')}})
            //   .then(function(response) {
            //     if(response.data.status==201){
            //       // store.commit('setToken', {token: response.data.result.token});
            //       // sessionStorage.setItem("token", response.data.result.token);
            //       // alert(sessionStorage.getItem('token'));
            //       router.push('create_requirement');
            //       Message.success("新建项目经历成功！")
            //       // alert(store.getters.token);
            //       //
            //     }else {
            //       console.log(response.data.status);
            //     }
            //
            //   }).catch(function (error) {
            //     console.log(error);
            //   });
            //
            // },
            resetForm(formName) {
              this.$refs[formName].resetFields();
            }
        }
    }
    // import VueCoreImageUpload  from 'vue-core-image-upload';
    // export default {
    //     data: function(){
    //         return {
    //            labelPosition: 'left',
    //             src: '../../../static/img/img.jpg',
    //             formLabelAlign: {
    //                name: '',
    //                region: '',
    //                address: '',
    //                text:''
    //            }
    //         }
    //     },
    //     components: {
    //             VueCoreImageUpload
    //     },
    //     methods:{
    //         imageuploaded(res) {
    //             console.log(res)
    //         },
    //         handleRemove(file, fileList) {
    //             console.log(file, fileList);
    //         },
    //         handlePreview(file) {
    //             console.log(file);
    //         },
    //         handleError(){
    //             this.$notify.error({
    //                 title: '上传失败',
    //                 message: '图片上传接口上传失败，可更改为自己的服务器接口'
    //             });
    //         },
    //         onSubmit() {
    //             this.$message.success('提交成功！');
    //         }
    //     }
    // }
</script>

<style scoped>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .pre-img{
        width:250px;
        height: 250px;
        margin-bottom: 20px;
    }
    hr{
        margin:.8em 0 1em;
        display:block;
        height:1px;
        border:0;
        border-top:1px solid #f4f4f4;
        padding:0;
    }
    .el-input{
      width: 30%;
    }
    .el-textarea{
      width:40%;
    }
    .el-button{
      margin-left: 0;
    }
</style>
