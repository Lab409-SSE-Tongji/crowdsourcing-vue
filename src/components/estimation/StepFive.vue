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
                    <p>
                        <input type="radio" name="picked" value='New Development' v-model="vaf.developmentType">New Development</input>
                        <input type="radio" name="picked" value='Enhancement' v-model="vaf.developmentType">Enhancement</input>
                        <input type="radio" name="picked" value='Re-development' v-model="vaf.developmentType">Re-development</input>
                    </p>
                </el-form-item>
                <el-form-item label="开发平台">
                    <p>
                        <input type="radio" name="picked1" value='PC' v-model="vaf.developmentPlatform">Personal computer</input>
                        <input type="radio" name="picked1" value='MF' v-model="vaf.developmentPlatform">Mainframe</input>
                        <input type="radio" name="picked1" value='MR' v-model="vaf.developmentPlatform">Mid-range</input>
                    </p>
                </el-form-item>
                <el-form-item label="开发语言">
                    <input type="radio" name="picked2" value="3GL" v-model="vaf.languageType"><span title="Java / COBOL / Visual Basic / C++ / C / C# / Other">3GL</span></input>
                    <input type="radio" name="picked2" value="4GL" v-model="vaf.languageType"><span title="Oracle / .Net / SQL / ABAP / NATURAL / Delphi / Access / ASP / Other"></span>4GL</input>
                    <input type="radio" name="picked2" value="ApG" v-model="vaf.languageType"><span title="(Application Generator): COOL:GEN / TELON / HPS / Other">ApG</span></input>
                </el-form-item>
                <el-form-item label="是否使用数据库">
                    <input type="radio" name="picked3" value="Yes" v-model="vaf.DBMS_Used">Yes</input>
                    <input type="radio" name="picked3" value="No" v-model="vaf.DBMS_Used">No</input>
                </el-form-item>

                <el-form-item label="软件可靠性要求">
                    <el-select v-model="vaf.RELY" placeholder="请选择">
                        <el-option label="Very Low" value="0.82"></el-option>
                        <el-option label="Low" value="0.92"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.10"></el-option>
                        <el-option label="Very High" value="1.26"></el-option>
                        <el-option label="Extra High" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品复杂度">
                    <el-select v-model="vaf.CPLX" placeholder="请选择">
                        <el-option label="Very Low" value="0.73"></el-option>
                        <el-option label="Low" value="0.87"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.17"></el-option>
                        <el-option label="Very High" value="1.34"></el-option>
                        <el-option label="Extra High" value="1.74"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="执行时间约束">
                    <el-select v-model="vaf.TIME" placeholder="请选择">
                        <el-option label="Very Low" value="0"></el-option>
                        <el-option label="Low" value="0"></el-option>
                        <el-option label="Normal" value="1.00"></el-option>
                        <el-option label="High" value="1.11"></el-option>
                        <el-option label="Very High" value="1.29"></el-option>
                        <el-option label="Extra High" value="1.63"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="要求的开发进度">
                    <el-select v-model="vaf.SCED" placeholder="请选择">
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
                    <el-button type="primary" @click="nextStep">提交</el-button>
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
                vaf: {
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
            }
        },
        created:function(){
           
            //如果来自编辑页面
            if(this.$route.query.id){
                var id = this.$route.query.id;
                this.queryId = id;
                this.$http.get('http://127.0.0.1:8011/estimation/getRequirement/'+id).then(response => {

                   
                   var res_vaf = response.body.vaf;
                   console.log(res_vaf);
                   
                   this.vaf.developmentType = res_vaf.developmentType;
                   this.vaf.developmentPlatform = res_vaf.developmentPlatform;
                   this.vaf.languageType = res_vaf.languageType;
                   this.vaf.DBMS_Used = res_vaf.dbms_Used;
                   this.vaf.RELY = res_vaf.rely;
                   this.vaf.CPLX = res_vaf.cplx;
                   this.vaf.TIME = res_vaf.time;
                   this.vaf.SCED = res_vaf.sced;

         

                 }, response => {
                  
                   console.log("error");
                 });

            }
        },
        methods: {
            prevStep() {
                var param = {id:this.queryId};
                this.$router.push( {path:'/step4', query: param});  
            },
            nextStep() {
                this.save(1);
            },
            save:function(flag){
                var id = this.queryId;
                var vaf = this.vaf;
                this.$http.post('http://127.0.0.1:8011/estimation/addVAF/'+id,vaf).then(response => {
                    if(flag == 1){
                        this.$http.post('http://127.0.0.1:8011/fp/fp/'+id,vaf).then(response => {
                            var fp = response.body;
                            this.$message.success('估算完成！共计'+fp+"个调整后功能点");
                            
                        }, response => {
                          
                          console.log("error");
                        });
                    }
                }, response => {
                  
                  console.log("error");
                });
            }
        }
    }
</script>