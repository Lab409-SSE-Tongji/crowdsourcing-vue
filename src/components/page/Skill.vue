<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 技能展示</el-breadcrumb-item>
                <el-breadcrumb-item>我的技能</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-table
                :data="tableData5"
                style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="项目名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="项目分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                        <el-form-item label="项目地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="项目描述">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="项目名称"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="项目分类"
                    prop="category">
            </el-table-column>
            <el-table-column
                    label="项目地址"
                    prop="address">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData5: [{
                    id: '12987122',
                    name: 'Crowdsourcing',
                    category: 'Vue',
                    desc: '用vue.js重构原来的项目',
                    address: 'https://github.com/breeswish/php-marked',
                }, {
                    id: '12987123',
                    name: '666',
                    category: 'Web',
                    desc: '这是一个很厉害的项目',
                    address: 'https://github.com/Lab409-SSE-Tongji/WebGIS-BackEnd',
                }, {
                    id: '12987125',
                    name: 'Test',
                    category: 'IOS',
                    desc: '一个测试用的项目',
                    address: 'https://github.com/Lab409-SSE-Tongji/crowdsourcing-front',
                }, {
                    id: '12987126',
                    name: 'Hello',
                    category: 'Android',
                    desc: 'Hello World!',
                    address: 'https://github.com/alibaba/weex',
                }]
            }
        }
    }
</script>
<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 100px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 60%;
    }


</style>