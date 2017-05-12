<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
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

            

                <el-form-item label="RET:">
                <a href="javascript:void(0)" @click="add">新增</a>
                    <p v-for="(RET,k) in entities[index].RETs">
                        RET名称<el-input v-model="RET.RETName" type="text"></el-input>
                        DET名称<el-input v-model="RET.RETField" type="text"></el-input>
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
                    <el-button type="primary" @click="prevStep">上一步</el-button>
                    <el-button type="primary" @click="nextStep">下一步</el-button>
                    <el-button type="primary" @click="save">保存</el-button>
                </el-form-item>
            </el-form>
            
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                entities:[],
                index:0,
                //这个字段的设计是因为vue双向绑定，选择下拉框时会对v-model的data产生影响。本代码中v-model是动态的，会出现问题。
                temp:''
            }
        },
        created: function(){
            //第一次进入这个界面，整理事务中的逻辑文件；否则，不整理。这个功能后期再优化。
             this.$http.get('http://127.0.0.1:8011/estimation/sortOutAllEntity/1493870686488').then(response => {

                
                for(var i=0; i<response.body.length; i++){
                    this.entities.push({
                        logicalFileName: response.body[i].logicalFileName,
                        logicalFieldName: response.body[i].logicalFieldName,
                        logicalFileType: '',
                        RETs: [
                        {
                            RETName: '',
                            RETField: ''
                        }]
                    })
                }
console.log(this.entities);
                this.temp = this.entities[0].logicalFileName;
                



                }, response => {
                  
                  console.log("error");
                });
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
            prevStep() {
                this.$router.push( {path:'/step2'});
            },
            nextStep:function(){
                this.$router.push( {path:'/step4'});
            },
            add:function() {
                this.entities[this.index].RETs.push( {
                        RETName: '',
                        RETField: ''
                    })
            },
            remove:function(index) {
                this.entities[this.index].RETs.splice(index,1)
            },
            save:function(){
                var entities = this.entities;
                var object = {entities:this.entities};
                this.$http.post('http://127.0.0.1:8011/estimation/addAllEntity/1493870686488',object).then(response => {

                }, response => {
                  
                  console.log("error"+response.status);
                });
            }
        }
    }
</script>