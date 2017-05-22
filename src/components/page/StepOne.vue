<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
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
                    <el-button type="primary" @click="save(0)">保存</el-button>
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
                    
                },
                queryId:'',
                insertId:''
            }
        },
        created:function(){
            //如果来自编辑页面
            if(this.$route.query.id){
                var id = this.$route.query.id;
                this.queryId = id;
                this.$http.get('http://127.0.0.1:8011/estimation/getRequirement/'+id).then(response => {

                    console.log("success");
                   console.log(response.body.description);
                   var description = response.body.description;
                   this.form.projectName = description.projectName;
                   this.form.projectDescription = description.projectDescription

                 }, response => {
                  
                   console.log("error");
                 });
            }
        },
        methods: {
            prevStep: function() {
                this.$router.push( {path:'/baseform'});
            },
            nextStep: function(){
                this.save(1);
                
            },
            save: function(flag){
                if(this.form.projectName=="" || this.form.projectName==null){
                    this.$message("请输入项目名称");
                    return;
                }
                if(this.$route.query.id){
                    var id = this.queryId;
                    var description = this.form;
                    this.$http.post('http://127.0.0.1:8011/estimation/addDescription/'+id,description).then(response => {
                         console.log("save success");
                         if(flag == 1){
                            var param = {id:this.queryId};
                            this.$router.push( {path:'/step2', query: param});
                         }
                         
                    }, response => {
                     
                     console.log("error");
                    });
                }
                else{
                    this.$http.get('http://127.0.0.1:8011/estimation/addRequirement').then(response => {
                        var id = response.body;
                        this.insertId = id;
                        console.log("insertid:"+this.insertId);
                        var description = this.form;
                        this.$http.post('http://127.0.0.1:8011/estimation/addDescription/'+id,description).then(response => {
                             console.log("save success");
                             if(flag == 1){
                                 var param = {id:this.insertId};
                                 this.$router.push( {path:'/step2', query: param});
                             }
                        }, response => {
                         
                         console.log("error");
                        });


                    }, response => {
                      
                      console.log("error");
                    });
                }
               
           }

        }
    }
</script>