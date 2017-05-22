<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step1', query: param}">创建您的项目</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step2', query: param}">添加数据模块</el-breadcrumb-item>
                <el-breadcrumb-item>调整数据模块</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="逻辑文件">
                    <el-select v-model="temp" placeholder="请选择" @change="changeEntity">
                        <el-option v-for="entity in entities" v-bind:value="entity.logicalFileName">{{entity.logicalFileName}}</el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="字段信息">
                    <el-input type="textarea" v-model="entities[index].logicalFieldName"></el-input>
                </el-form-item>

            

                <el-form-item label="ret:">
                    <a href="javascript:void(0)" @click="add">新增</a>
                    <p v-for="(ret,k) in entities[index].rets">
                        RET<el-input v-model="ret.retname" type="text"></el-input>
                        DET名称<el-input v-model="ret.retfield" type="text"></el-input>
                        <a href="javascript:void(0)" @click="remove(k)">删除</a>
                    </p>
                </el-form-item>
                
                <el-form-item label="逻辑文件类型">
                    <p>
                        <input type="radio" name="picked" value='EIF' v-model="entities[index].logicalFileType">外部逻辑文件
                        <input type="radio" name="picked" value='ILF' v-model="entities[index].logicalFileType">内部逻辑文件
                    </p>
                </el-form-item>
                
                
                <el-form-item>
                    <el-button type="primary" @click="sort()">整理</el-button>
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
                entities:[
                    {
                        logicalFileName: '',
                        logicalFieldName: '',
                        logicalFileType: '',
                        rets: [
                        {
                            retname: '',
                            retfield: ''
                        }]
                    }
                ],
                index:0,
                //这个字段的设计是因为vue双向绑定，选择下拉框时会对v-model的data产生影响。本代码中v-model是动态的，会出现问题。
                temp: '',
                queryId: ''
            }
        },
        created: function(){
            if(this.$route.query.id){
                var id = this.$route.query.id;
                this.queryId = id;
                this.$http.get('http://127.0.0.1:8011/estimation/getRequirement/'+id).then(response => {

                   console.log("success");
                   console.log(response.body.entities);
                   var res_entities = response.body.entities;
                   this.entities = [];
                   for(var i=0; i<res_entities.length; i++){
                        this.entities[i] = res_entities[i]; 
                   }
                   this.temp = this.entities[0].logicalFileName;
                 }, response => {
                  
                   console.log("error");
                 });
            }
        },
        methods: {
            changeEntity(e) {
            
                for(var i=0; i<this.entities.length; i++){
                    console.log(i+this.entities[i].logicalFileName + ".." + e);
                    if(this.entities[i].logicalFileName == e){
                        this.index = i;
                        console.log(i);
                        break;
                    }
                }
                

            },
            sort: function(){
                var id = this.queryId;
                this.$http.get('http://127.0.0.1:8011/estimation/sortOutAllEntity/'+id).then(response => {

                   this.entities = [];
                   for(var i=0; i<response.body.length; i++){
                       this.entities.push({
                           logicalFileName: response.body[i].logicalFileName,
                           logicalFieldName: response.body[i].logicalFieldName,
                           logicalFileType: '',
                           rets: [
                           {
                               retname: '',
                               retfield: ''
                           }]
                       })
                   }
                   console.log(this.entities);
                   this.temp = this.entities[0].logicalFileName;
                   }, response => {
                     
                     console.log("error");
                   });
            },
            prevStep() {
                var param = {id:this.queryId};
                this.$router.push( {path:'/step2', query: param});  
            },
            nextStep:function(){
                this.save(1);
            },
            add:function() {
                this.entities[this.index].rets.push( {
                        retname: '',
                        retfield: ''
                    })
            },
            remove:function(index) {
                this.entities[this.index].rets.splice(index,1)
            },
            save:function(flag){
                var id = this.queryId;
                var entities = this.entities;
                var object = {entities:this.entities};
                this.$http.post('http://127.0.0.1:8011/estimation/addAllEntity/'+id,object).then(response => {
                    if(flag == 1){
                        var param = {id:this.queryId};
                        this.$router.push( {path:'/step4', query: param});
                    }
                }, response => {
                  
                  console.log("error");
                });
            }
        }
    }
</script>