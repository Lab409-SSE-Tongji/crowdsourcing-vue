<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step1', query: param}">项目描述</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step2', query: param}">录入目标模型</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step3', query: param}">录入对象模型</el-breadcrumb-item>
                <el-breadcrumb-item>计算UFP</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">  
                
                <el-form-item>
                    <el-button type="primary" @click="prevStep">上一步</el-button>
                    <el-button type="primary" @click="nextStep">下一步</el-button>
                    <el-button type="primary" @click="submit">提交</el-button>
                    <!-- <el-button type="primary" @click="onSave">保存</el-button> -->
                </el-form-item>
            </el-form>
            
        </div>

    </div>
</template>

<script>
    import server from '../../../config/index';
    export default {
        data: function(){
            return {
                queryId: ''                     
            }
        },
        created: function(){
            if(this.$route.query.id){
                var id = this.$route.query.id;
                this.queryId = id;
            }
        },
        methods: {
            submit() {
                var id = this.queryId;
                this.$http.get(server.url + '/fp/ufp/'+id).then(response => {
                    var ufp = response.body;
                    this.$message.success('估算完成！共计'+ufp+"个未调整功能点");
                }, response => {
                  
                    console.log("error");
                });
            },
            prevStep:function(){
                var param = {id:this.queryId};
                this.$router.push( {path:'/step3', query: param});  
            },
            nextStep:function(){
                var param = {id:this.queryId};
                this.$router.push( {path:'/step5', query: param});
            }
        }

    }
</script>