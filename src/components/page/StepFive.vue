<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step1', query: param}">项目描述</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step2', query: param}">录入目标模型</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step3', query: param}">录入对象模型</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step4'}">计算UFP</el-breadcrumb-item>
                <el-breadvrumb-item>step5</el-breadvrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="开发类型">
                       <!--  <el-radio class="radio" v-model="form.developmentType" :label="NewDevelopment"></el-radio>
                        <el-radio class="radio" v-model="form.developmentType" :label="Enhancement"></el-radio>
                        <el-radio class="radio" v-model="form.developmentType" :label="ReDvelopment"></el-radio> -->
                    <p>
                        <input type="radio" name="picked" value='New Development' v-model="form.developmentType">New Development</input>
                        <input type="radio" name="picked" value='Enhancement' v-model="form.developmentType">Enhancement</input>
                        <input type="radio" name="picked" value='Re-development' v-model="form.developmentType">Re-development</input>
                    </p>
                </el-form-item>
                <el-form-item label="开发平台">
<!--                          <el-radio class="radio" v-model="form.developmentPlatform" :label='PC'>Personal computer</el-radio>
                         <el-radio class="radio" v-model="form.developmentPlatform" :label='MF'>Mainframe</el-radio>
                         <el-radio class="radio" v-model="form.developmentPlatform" :label='MR'>Mid-range</el-radio> -->

                    <p>
                        <input type="radio" name="picked1" value='PC' v-model="form.developmentPlatform">Personal computer</input>
                        <input type="radio" name="picked1" value='MF' v-model="form.developmentPlatform">Mainframe</input>
                        <input type="radio" name="picked1" value='MR' v-model="form.developmentPlatform">Mid-range</input>
                    </p>
                </el-form-item>
                <el-form-item label="开发语言">
                    <input type="radio" name="picked2" value="3GL" v-model="form.languageType"><span title="Java / COBOL / Visual Basic / C++ / C / C# / Other">3GL</span></input>
                    <input type="radio" name="picked2" value="4GL" v-model="form.languageType"><span title="Oracle / .Net / SQL / ABAP / NATURAL / Delphi / Access / ASP / Other"></span>4GL</input>
                    <input type="radio" name="picked2" value="ApG" v-model="form.languageType"><span title="(Application Generator): COOL:GEN / TELON / HPS / Other">ApG</span></input>
                </el-form-item>
                <el-form-item label="是否使用数据库">
                    <input type="radio" name="picked3" value="Yes" v-model="form.DBMS_Used">Yes</input>
                    <input type="radio" name="picked3" value="No" v-model="form.DBMS_Used">No</input>
                </el-form-item>

                <el-form-item label="软件可靠性要求">
                    <el-select v-model="form.RELY" placeholder="请选择" @change="bindForBug" @visible-change="changeForBug">
                        <el-option label="Very Low" value="0.82"></el-option>
                        <el-option label="Low" value="0.92"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.10"></el-option>
                        <el-option label="Very High" value="1.26"></el-option>
                        <el-option label="Extra High" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品复杂度">
                    <el-select v-model="form.CPLX" placeholder="请选择" @change="bindForBug" @visible-change="changeForBug">
                        <el-option label="Very Low" value="0.73"></el-option>
                        <el-option label="Low" value="0.87"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.17"></el-option>
                        <el-option label="Very High" value="1.34"></el-option>
                        <el-option label="Extra High" value="1.74"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="执行时间约束">
                    <el-select v-model="form.TIME" placeholder="请选择" @change="bindForBug" @visible-change="changeForBug">
                        <el-option label="Very Low" value="0"></el-option>
                        <el-option label="Low" value="0"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.11"></el-option>
                        <el-option label="Very High" value="1.29"></el-option>
                        <el-option label="Extra High" value="1.63"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="要求的开发进度">
                    <el-select v-model="form.SCED" placeholder="请选择" @change="bindForBug" @visible-change="changeForBug">
                        <el-option label="Very Low" value="1.43"></el-option>
                        <el-option label="Low" value="1.14"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.00"></el-option>
                        <el-option label="Very High" value="1.00"></el-option>
                        <el-option label="Extra High" value="0"></el-option>
                    </el-select>
                </el-form-item>

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
        data: function() {
            return{
                form: {
                    developmentType: '',
                    developmentPlatform: '',
                    languageType: '',
                    DBMS_Used: '',
            
                    RELY: '',
                    CPLX: '',
                    TIME: '',
                    SCED: ''
                },
                queryId: ''  
                //forBug: 1
            }
        },
        methods: {
            // //编辑从数据库载入的信息时，点击增加按钮，并不会有新的输入框产生，而数据确实发生了更改。也就是说视图与数据的更新不同步，只有修改一个其他的数据后，视图才能同步到数据上。因此引入数据forBug。产生此问题的原因不明，猜测与vue无法监听部分数组操作有关。
            // bindForBug: function(e){
            //     this.forBug = this.forBug + 1;
            // },
            // changeForBug: function(isVisible){     
            //     if(!isVisible)
            //     this.forBug = this.forBug - 1;
            // }
            prevStep() {
                var param = {id:this.queryId};
                this.$router.push( {path:'/step4', query: param});  
            },
            nextStep() {
                this.save(1);
            },
            save:function(flag){
                var id = this.queryId;
                var form = this.form;
                this.$http.post('http://127.0.0.1:8011/'+id,{form}).then(response => {
                    console.log("success");
                    if(flag == 1){
                        var param = {id:this.queryId};
                        this.$router.push( {path:'/step6', query: param});
                    }
                }, response => {
                  
                  console.log("error");
                });
            }
        }
    }
</script>