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
                  <p v-for="(transaction,i1) in transactions">

                    <el-form-item label="功能名称">                 
                        <el-input v-model="transaction.transactionName"></el-input>
                    </el-form-item>

                  
                    <el-form-item label="事务类型">
                        <el-select v-model="transaction.transactionType" placeholder="请选择">
                            <el-option label="EI" value="EI"></el-option>
                            <el-option label="EO" value="EO"></el-option>
                            <el-option label="EQ" value="EQ"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="具体描述">
                        <el-input type="textarea" v-model="transaction.transactionDescription"></el-input>
                    </el-form-item>

                    <!--step3上的-->
           <!--          <el-form-item label="RET:">
                    <a href="javascript:void(0)" @click="add">新增</a>
                        <p v-for="(RET,k) in entities[index].RETs">
                            RET名称<el-input v-model="RET.RETName" type="text"></el-input>
                            DET名称<el-input v-model="RET.RETField" type="text"></el-input>
                            <a href="javascript:void(0)" @click="remove(k)">删除</a>
                        </p>
                    </el-form-item> -->

                    <!--照step3自己写的，其中add变成了addIndex2，嵌套的add用addIndex3-->
                    <el-form-item label="步骤:">
                        <!-- <el-button :plain="true" type="success" @click="addIndex2(i1)">新增步骤</el-button> -->
                        <p v-for="(step,i2) in transaction.steps">
                            <!-- <el-button :plain="true" type="success" @click="removeIndex2(i1,i2)">删除该步骤</el-button> -->
                            <el-form-item label="">
                                <el-form-item label="步骤名称:">
                                    <el-input v-model="step.stepName" style="width:80%"></el-input>
                                </el-form-item>
                                <el-button :plain="true" type="success" @click="addIndex3(i1,i2)">新增字段</el-button>
                                <p v-for="(concerningDataSet,i3) in step.concerningDataSets">
                                    <!-- <el-button :plain="true" type="success" @click="removeIndex3(i1,i2,i3)">删除该逻辑字段</el-button> -->
                                    <el-form-item label="逻辑文件:">
                                        <el-input v-model="concerningDataSet.logicalFileName" style="width:80%"></el-input>
                                    </el-form-item>
                                    <el-form-item label="逻辑字段:">
                                        <el-input v-model="concerningDataSet.logicalFieldName" style="width:80%"></el-input>
                                    </el-form-item>
                                    <el-button :plain="true" type="success" @click="removeIndex3(i1,i2,i3)">删除该逻辑字段</el-button>
                                    <!--<a href="javascript:void(0)" @click="removeIndex3(i1,i2,i3)">删除该逻辑字段</a>-->
                                </p>
                                <!-- <el-button :plain="true" type="success" @click="addIndex3(i1,i2)">新增字段</el-button> -->
                                <!--<a href="javascript:void(0)" @click="addIndex3(i1,i2)">新增字段</a>-->    
                            </el-form-item> 
                            <el-button :plain="true" type="success" @click="addIndex2(i1)">新增步骤</el-button>
                            <el-button :plain="true" type="success" @click="removeIndex2(i1,i2)">删除该步骤</el-button>
                            <!--<a href="javascript:void(0)" @click="removeIndex2(i1,i2)">删除该步骤</a>-->                        
                        </p>
                        <!-- <el-button :plain="true" type="success" @click="addIndex2(i1)">新增步骤</el-button> -->
                        <!--<a href="javascript:void(0)" @click="addIndex2(i1)">新增步骤</a>-->
                    </el-form-item>

                    <el-form-item label="逻辑操作的数量">
                        <p>
                            <el-select v-model="transaction.regulationOfSameLogic" placeholder="请选择">
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
                            <el-select v-model="transaction.regulationOfReturningStatus" placeholder="请选择">
                                 <el-option label="0" value="0"></el-option>
                                 <el-option label="1" value="1"></el-option>
                                 <el-option label="2" value="2"></el-option>
                                 <el-option label="3" value="3"></el-option>
                                 <el-option label="4" value="4"></el-option>
                                 <el-option label="5" value="5"></el-option>
                            </el-select>
                        </p>
                    </el-form-item>

                    <el-form-item label="测试input和button能否串起来">
                        <el-input v-model="transactions.transactionName" style="width:80%"></el-input>
                        <el-button type="primary" style="" @click="">测试</el-button>
                    </el-form-item>
                   
                    <el-button :plain="true" type="success" @click="removeIndex1(i1)">删除</el-button>
                  </p> 
                    <el-form-item>
                        <el-button type="primary" @click="addIndex1">添加</el-button>
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
                transactions:[
                    {
                        transactionName : '',
                        transactionType : '',
                        transactionDescription : '',
                        steps : [ 
                           {
                               stepName : '',
                               concerningDataSets : [ 
                                   {
                                       logicalFileName : '',
                                       logicalFieldName : ''
                                   }
                               ]
                           }
                       ],
                       regulationOfSameLogic : '',
                       regulationOfReturningStatus : ''                   
                    }
                ]
            }
        },
        created: function(){
        },
        methods: {
            prevStep() {
                this.$router.push( {path:'/step1'});
            },
            nextStep:function(){
                this.$router.push( {path:'/step3'});
            },
            addIndex1:function() {
                this.transactions.push(
                    {
                        transactionName : '',
                        transactionType : '',
                        transactionDescription : '',
                        steps : [ 
                        ],
                        regulationOfSameLogic : '',
                        regulationOfReturningStatus : ''                   
                    }  
                    
                );
            },
            removeIndex1:function(index) {
                this.transactions.splice(index,1);
            },
            addIndex2:function(index) {
                this.transactions[index].steps.push(
                    {
                        stepName : '',
                        concerningDataSets : [ 
                            {
                                logicalFileName : '',
                                logicalFieldName : ''
                            }
                        ]
                    }
                );
            },
            removeIndex2:function(index1, index2) {
                this.transactions[index1].steps.splice(index2,1);
            },
            addIndex3:function(index1, index2) {
                this.transactions[index1].steps[index2].concerningDataSets.push(
                    {
                        logicalFileName : '',
                        logicalFieldName : ''
                    }
                );
            },
            removeIndex3:function(index1, index2, index3) {
                this.transactions[index1].steps[index2].concerningDataSets.splice(index3,1);
            },
            save:function(){
                var transactions = this.transactions;
                this.$http.post('http://127.0.0.1:8011/estimation/addAllTransaction/1493870686488',{transactions}).then(response => {
                    console.log("success");
                }, response => {
                  
                  console.log("error");
                });
            }
        }
    }
</script>