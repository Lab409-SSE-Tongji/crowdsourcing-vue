<template>
    <!--最开始的step2在同路径下的temp中-->
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step1', query: param}">创建您的项目</el-breadcrumb-item>
                <el-breadcrumb-item>添加数据模块</el-breadcrumb-item>     
           </el-breadcrumb>
        </div>
        
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                  <p v-for="(transaction,i1) in transactions">

                    <el-form-item prop="transactionName" label="功能名称" :rules="[
                    { required: true, message: '功能名称不能为空', trigger: 'blur' },
                    { max: 20, message: '长度要在20个字符以内', trigger: 'blur'}
                    ]">                 
                        <el-input v-model="transaction.transactionName" placeholder="不得多于20个字符"></el-input>
                    </el-form-item>

                  
                    <el-form-item label="事务类型">
                        <el-select v-model="transaction.transactionType" placeholder="请选择" 
                        @change="bindForBug" @visible-change="changeForBug">
                            <el-option label="EI" value="EI"></el-option>
                            <el-option label="EO" value="EO"></el-option>
                            <el-option label="EQ" value="EQ"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="transactionDescription" label="具体描述" :rules="[
                    { required: true, message: '具体描述内容不能为空', trigger: 'blur' },
                    { max: 50, message: '长度要在50个字符以内', trigger: 'blur'}
                    ]">
                        <el-input type="textarea" v-model="transaction.transactionDescription" placeholder="不得多于50个字符"></el-input>
                    </el-form-item>

                    <el-form-item label="步骤:">

                        <p v-for="(step,i2) in transaction.steps">
                            <el-form-item label="">
                                <el-form-item prop="stepName" label="步骤名称:" :rules="[
                                { required: true, message: '步骤名称不能为空', trigger: 'blur' },
                                { max: 20, message: '长度要在20个字符以内', trigger: 'blur'}
                                ]">
                                    <el-input v-model="step.stepName" style="width:80%" placeholder="不得多于20个字符"></el-input>
                                </el-form-item>
                                <i class="el-icon-plus" @click="addIndex3(i1,i2)"></i>
                                <!-- <el-button :plain="true" type="success" @click="addIndex3(i1,i2)">新增字段</el-button> -->
                                <p v-for="(concerningDataSet,i3) in step.concerningDataSets">
                                    <el-form-item prop="logicalFileName" label="逻辑文件:" :rules="[
                                    { required: true, message: '逻辑文件名称不能为空', trigger: 'blur' },
                                    ]">
                                        <el-input v-model="concerningDataSet.logicalFileName" style="width:80%" placeholder="请输入逻辑文件名称"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="logicalFieldName" label="逻辑字段:" :rules="[
                                    { required: true, message: '逻辑字段名称不能为空', trigger: 'blur' },
                                    ]">
                                        <el-input v-model="concerningDataSet.logicalFieldName" style="width:80%" placeholder="请输入逻辑字段名称"></el-input>
                                    </el-form-item>
                                    <!-- <el-button :plain="true" type="success" @click="removeIndex3(i1,i2,i3)">删除该逻辑字段</el-button> -->
                                    <i class="el-icon-minus" @click="removeIndex3(i1,i2,i3)"></i>
                                </p>
                            </el-form-item> 
                            <el-button :plain="true" type="success" @click="removeIndex2(i1,i2)">删除步骤</el-button>
                        </p>
                        <el-button :plain="true" type="success" @click="addIndex2(i1)">新增步骤</el-button>
                          
                    </el-form-item>

                     <el-form-item label="剔除重复字段的数量">                 
                     <el-select v-model="transaction.countRepeatField" placeholder="请选择" 
                            @change="bindForBug" @visible-change="changeForBug" >
                                 <el-option label="0" value="0"></el-option>
                                 <el-option label="1" value="1"></el-option>
                                 <el-option label="2" value="2"></el-option>
                                 <el-option label="3" value="3"></el-option>
                                 <el-option label="4" value="4"></el-option>
                                 <el-option label="5" value="5"></el-option>
                            </el-select>
                    </el-form-item>

                    <el-form-item label="逻辑操作的数量">
                        <p>
                            <el-select v-model="transaction.regulationOfSameLogic" placeholder="请选择" 
                           @change="bindForBug" @visible-change="changeForBug" >
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
                            <el-select v-model="transaction.regulationOfReturningStatus" placeholder="请选择" @change="bindForBug" @visible-change="changeForBug" >
                                 <el-option label="0" value="0"></el-option>
                                 <el-option label="1" value="1"></el-option>
                                 <el-option label="2" value="2"></el-option>
                                 <el-option label="3" value="3"></el-option>
                                 <el-option label="4" value="4"></el-option>
                                 <el-option label="5" value="5"></el-option>
                            </el-select>
                        </p>
                    </el-form-item>
                   
                    <el-button :plain="true" type="success" @click="removeIndex1(i1)">删除</el-button>
                  </p> 
                    <el-form-item>
                        <el-button type="primary" @click="addIndex1">添加</el-button>
                        <el-button type="primary" @click="prevStep">上一步</el-button>
                        <el-button type="primary" @click="nextStep">下一步</el-button>
                        <el-button type="primary" @click="save(0)">保存</el-button>
                    </el-form-item>

                   <el-form-item label="">                 
                        <el-input v-model="forBug" type='hidden'></el-input>
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
                       countRepeatField: '',
                       regulationOfSameLogic : '',
                       regulationOfReturningStatus : ''                   
                    }
                ],
                queryId: '',
                forBug: 1
            }
        },
        created:function(){
            this.transactions[0].regulationOfReturningStatus = 1;
            //如果来自编辑页面
            if(this.$route.query.id){
                var id = this.$route.query.id;
                this.queryId = id;
                this.$http.get('http://127.0.0.1:8011/estimation/getRequirement/'+id).then(response => {

                   console.log("success");
                   console.log(response.body.transactions);
                   var res_transactions = response.body.transactions;
                   //清空原数组
                   if(res_transactions.length != 0){
                        this.transactions = [];
                   }
                   for(var i=0; i<res_transactions.length; i++){
                        this.transactions[i] = res_transactions[i]; 
                   }

                 }, response => {
                  
                   console.log("error");
                 });

            }
        },
        methods: {
            //编辑从数据库载入的信息时，点击增加按钮，并不会有新的输入框产生，而数据确实发生了更改。也就是说视图与数据的更新不同步，只有修改一个其他的数据后，视图才能同步到数据上。因此引入数据forBug。产生此问题的原因不明，猜测与vue无法监听部分数组操作有关。
            bindForBug: function(e){
                this.forBug = this.forBug + 1;
            },
            changeForBug: function(isVisible){     
                if(!isVisible)
                this.forBug = this.forBug - 1;
            },
            prevStep() {
                var param = {id:this.queryId};
                this.$router.push( {path:'/step1', query: param});            
            },
            nextStep:function(){
               this.save(1);
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
                this.transactions[0].regulationOfReturningStatus = 5;
                this.bindForBug();
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
                console.log(this.transactions);
            },
            removeIndex2:function(index1, index2) {
                this.forBug = this.forBug + 1;
                this.transactions[index1].steps.splice(index2,1);
            },
            addIndex3:function(index1, index2) {
                this.forBug = this.forBug + 1;
                this.transactions[index1].steps[index2].concerningDataSets.push(
                    {
                        logicalFileName : '',
                        logicalFieldName : ''
                    }
                );
            },
            removeIndex3:function(index1, index2, index3) {
                this.forBug = this.forBug + 1;
                this.transactions[index1].steps[index2].concerningDataSets.splice(index3,1);
            },
            //flag用于区分仅保存、保存并以id跳转、保存并以insertid跳转三种情况。
            save:function(flag){
                var id = this.queryId;
                var transactions = this.transactions;
                this.$http.post('http://127.0.0.1:8011/estimation/addAllTransaction/'+id,{transactions}).then(response => {
                    console.log("success");
                    if(flag == 1){
                        var param = {id:this.queryId};
                        this.$router.push( {path:'/step3', query: param});
                    }
                }, response => {
                  
                  console.log("error");
                });
            }
        }
    }
</script>