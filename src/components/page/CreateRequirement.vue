<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">            
                <el-form-item>
                    <el-button type="primary" @click="jumpTo">创建需求</el-button>
                    <el-button type="primary" @click="records">高级估算</el-button>
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
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: ''
                }
            }
        },
        methods: {
            records:function(){
                this.$router.push( {path:'/records'});
            },
            jumpTo:function(){
                this.$router.push( {path:'/step1'});
            }
        }
    }
</script>