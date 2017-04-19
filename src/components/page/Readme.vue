<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-setting"></i>个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-light">
                        <img class="user-logo" src="../../../static/img/img.jpg">
                        <h2>{{username}}</h2>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '邱娟'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped>
    .ms-doc {
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-light {
        background: #f0f1f4;
    }
    .user-logo {
        position: relative;
        height: 10%;
        width: 10%;
        border-radius: 50%;
    }
    h2{
        display: inline-block;
    }
</style>