<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>技能展示</el-breadcrumb-item>
                <el-breadcrumb-item>新增技能</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="content-title">上传图片(可选)</div>
        <hr>
        <img class="pre-img" :src="src" alt="">
        <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
                               :crop="true"
                               text="上传图片"
                               url="/api/posts/"
                               extensions="png,gif,jpeg,jpg"
                               @:imageuploaded="imageuploaded"
                               @:errorhandle="handleError"></vue-core-image-upload>
        <hr>
        <div class="content-title">新增项目经历</div>
        <hr>
        <el-form :label-position="labelPosition" label-width="8em" :model="formLabelAlign">
          <el-form-item label="项目名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="项目分类">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="项目地址">
            <el-input v-model="formLabelAlign.address"></el-input>
          </el-form-item>
          <el-form-item label="项目简介">
              <el-input type="textarea" rows="4" v-model="formLabelAlign.text"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button>清空输入</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import VueCoreImageUpload  from 'vue-core-image-upload';
    export default {
        data: function(){
            return {
               labelPosition: 'left',
                src: '../../../static/img/img.jpg',
                formLabelAlign: {
                   name: '',
                   region: '',
                   address: '',
                   text:''
               }
            }
        },
        components: {
                VueCoreImageUpload
        },
        methods:{
            imageuploaded(res) {
                console.log(res)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            },
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
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
