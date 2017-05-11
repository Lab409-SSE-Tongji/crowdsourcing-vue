<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建您的项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="项目名称">
                    <el-input v-model="form.projectName"></el-input>
                </el-form-item>
       
                <el-form-item label="项目简介">
                    <el-input type="textarea" v-model="form.projectDescription"></el-input>
                </el-form-item>
            </el-form>

            <el-form ref="form" :model="form" label-width="80px">            
                <el-form-item>
                    <el-button type="primary" @click="prevStep">上一步</el-button>
                    <el-button type="primary" @click="nextStep">下一步</el-button>
                    <el-button type="primary" @click="test">保存</el-button>
                </el-form-item>
            </el-form>
            
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    projectName: '',
                    projectDescription: ''
                    
                }
            }
        },
        methods: {
            prevStep() {
                this.$router.push( {path:'/baseform'});
            },
            nextStep:function(){
                this.$router.push( {path:'/step2'});
            },
            test:function(){
                console.log(this.form);
                var forms = {};
                forms.projectName = this.form.projectName;
                forms.projectDescription = "yy";
                 console.log(JSON.stringify(forms));


                this.$http.get('http://127.0.0.1:8011/estimation/addRequirement').then(response => {

                  console.log("data");
                

                }, response => {
                  
                  console.log("error");
                });

                 this.$http.post('http://127.0.0.1:8011/estimation/test',{body:JSON.stringify(forms)}).then(response => {

                  console.log("response.body");
     
                 

                }, response => {
                  
                  console.log("error");
                });
            }
        }
    }
</script>