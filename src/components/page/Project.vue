<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的开发</el-breadcrumb-item>
                <el-breadcrumb-item>我的项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="项目id" width="120">
              <template scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column prop="name" label="项目名称" width="120">
            </el-table-column>
            <el-table-column prop="address" label="项目地址" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '申请中', value: '申请中' },{ text: '开发中', value: '开发中' },{ text: '已完成', value: '已完成' }]" :filter-method="filterTag" filter-placement="bottom-end">
              <template scope="scope">
                <el-tag
                  :type="scope.row.tag === '开发中' ? 'primary' : 'success'"
                  close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: 'Crowdsourcing',
                    category: 'Vue',
                    date: '2017-5-1',
                    address: 'https://github.com/breeswish/php-marked',
                    tag:'已完成',
                }, {
                    id: '12987123',
                    name: '666',
                    category: 'Web',
                    date: '2017-5-2',
                    address: 'https://github.com/Lab409-SSE-Tongji/WebGIS-BackEnd',
                    tag:'开发中',
                }, {
                    id: '12987125',
                    name: 'Test',
                    category: 'IOS',
                    date: '2017-4-30',
                    address: 'https://github.com/Lab409-SSE-Tongji/crowdsourcing-front',
                    tag:'申请中',
                }, {
                    id: '12987126',
                    name: 'Hello',
                    category: 'Android',
                    date: '2016-5-1',
                    address: 'https://github.com/alibaba/weex',
                    tag:'已完成',
                }],

            }
        },
            methods: {
              formatter(row, column) {
                return row.address;
              },
              filterTag(value, row) {
                return row.tag === value;
              }
            }



    }
</script>

<style src="../../../static/css/datasource.css"></style>
