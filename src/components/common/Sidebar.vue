<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>个人信息
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>技能展示</template>
                <el-menu-item index="skillupload">新增技能</el-menu-item>
                <el-menu-item index="skill">我的技能</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>我的需求</template>
                <el-menu-item index="create_requirement">创建需求</el-menu-item>
                <el-menu-item index="requirement">管理需求</el-menu-item>
                <!-- <el-menu-item index="vueeditor">富文本编辑器</el-menu-item> -->
                <!-- <el-menu-item index="markdown">markdown</el-menu-item> -->
                <!-- <el-menu-item index="upload">文件上传</el-menu-item> -->
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>我的开发</template>
                <el-menu-item index="project">开发中项目</el-menu-item>
                <el-menu-item index="mixcharts"></el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','看');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;

    }
    .sidebar > ul {
        height:100%;
    }
</style>
