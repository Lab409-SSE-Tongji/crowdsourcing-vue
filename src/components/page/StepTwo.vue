<template>
    <!--最开始的step2在同路径下的temp中-->
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
                <el-breadcrumb-item>添加数据模块</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="功能名称">
                    <el-input v-model="entities[index].name"></el-input>
                </el-form-item>
                <el-form-item label="事务类型">
                    <el-select v-model="transactiontype" placeholder="请选择">
                        <el-option label="EI" value="EI"></el-option>
                        <el-option label="EO" value="EO"></el-option>
                        <el-option label="EQ" value="EQ"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="具体描述">
                    <el-input type="textarea" v-model="entities[index].desc"></el-input>
                </el-form-item>

                <!--step3上的-->
                <el-form-item label="RET:">
                <a href="javascript:void(0)" @click="add">新增</a>
                    <p v-for="(RET,k) in entities[index].RETs">
                        RET名称<el-input v-model="RET.RETName" type="text"></el-input>
                        DET名称<el-input v-model="RET.RETField" type="text"></el-input>
                        <a href="javascript:void(0)" @click="remove(k)">删除</a>
                    </p>
                </el-form-item>

                <!--照step3自己写的，其中add变成了addself，嵌套的add用addfield-->
                <el-form-item label="步骤:">
                <a href="javascript:void(0)" @click="addself">新增</a>
                    <p v-for="(step,k) in entities[index].steps">
                    RET名称<el-input v-model="step.RETName" type="text"></el-input>
                    DET名称<el-input v-model="step.RETField" type="text"></el-input>
                    <a href="javascript:void(0)" @click="addfield">新增字段</a>
                        <p v-for="(field,i) in entities[index].fields">
                            字段名称<el-input v-model="field.fieldName" type="text"></el-input>
                            字段信息<el-input v-model="field.fieldInfo" type="text"></el-input>
                            <a href="javascript:void(0)" @click="removefield(i)">删除</a>
                        </p>
                        <a href="javascript:void(0)" @click="removeself(k)">删除</a>
                    </p>
                </el-form-item>

                <el-form-item label="逻辑操作的数量">
                    <p>
                        <el-select v-model="entities[index].picked1" placeholder="请选择">
                             <el-option label="0" value="0"></el-option>
                             <el-option label="1" value="1"></el-option>
                             <el-option label="2" value="2"></el-option>
                             <el-option label="3" value="3"></el-option>
                             <el-option label="4" value="4"></el-option>
                             <el-option label="5" value="5"></el-option>
                        </el-select>
                    </p>
                </el-form-item>
                <el-form-item label="返回状态信息的数量">
                    <p>
                        <el-select v-model="entities[index].picked2" placeholder="请选择">
                             <el-option label="0" value="0"></el-option>
                             <el-option label="1" value="1"></el-option>
                             <el-option label="2" value="2"></el-option>
                             <el-option label="3" value="3"></el-option>
                             <el-option label="4" value="4"></el-option>
                             <el-option label="5" value="5"></el-option>
                        </el-select>
                    </p>
                </el-form-item>
                
                <el-button :plain="true" type="success" @click="removefuctionmodel(index)">删除</el-button>
                <el-form-item>
                    <el-button type="primary" @click="addfunctionmodel">添加</el-button>
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
                temp:'',
                transactiontype:''
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
            prevStep() {
                this.$router.push( {path:'/step1'});
            },
            nextStep:function(){
                this.$router.push( {path:'/step3'});
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
            addself:function() {
                this.entities[this.index].steps.push( {
                        RETName: '',
                        RETField: ''
                    })
            },
            removeself:function(index) {
                this.entities[this.index].steps.splice(index,1)
            },
            addfield:function() {
                this.entities[this.index].fields.push( {
                        fieldName: '',
                        fieldInfo: ''
                    })
            },
            removefield:function(index) {
                this.entities[this.index].fields.splice(index,1)
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