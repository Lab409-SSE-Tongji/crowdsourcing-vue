<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>管理需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="requirement_id" label="项目id" width="120">
            </el-table-column>
            <el-table-column prop="requirement_name" label="项目名称" width="280">
            </el-table-column>
            <el-table-column prop="requirement_type" label="项目类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '发布中', value: '发布中' }, { text: '开发中', value: '开发中' },{ text: '已完成', value: '已完成' }]" :filter-method="filterTag" filter-placement="bottom-end">
              <template scope="scope">
                <el-tag
                  :type="scope.row.tag === '开发中' ? 'primary' : 'success'"
                  close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
          <el-table-column label="操作" width="200">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
          </el-table-column>
        </el-table>
    </div>
    <el-pagination

</template>

<script>
    import axios from 'axios';
    import server from '../../../config/index';

    export default {
        data() {
            return {
                url: server.url + '/api/requirement',
                tableData: null
            }

        },
        created () {
          var that = this;
          axios.get(this.url, {'headers': {'Authorization': sessionStorage.getItem('token')}})
          .then(function(response) {
            if(response.data.status==200){
              that.tableData = response.data.result;
              for (var index = 0; index < that.tableData.length; index++) {
                console.log(that.tableData[index]['requirement_id']);
                if (that.tableData[index].requirement_state == 1)
                  that.tableData[index]['tag'] = '发布中';
                else if (that.tableData[index].requirement_state == 2)
                  that.tableData[index]['tag'] = '开发中';
                else if (that.tableData[index].requirement_state == 3)
                  that.tableData[index]['tag'] = '已完成';
                else
                  that.tableData[index]['tag'] = '错误';
              }
            } else {
              console.log(response.data.status);
            }

          }).catch(function (error) {
            console.log(error);
          });

        },
        methods: {

          formatter(row, column) {
            return row.address;
          },
          filterTag(value, row) {
            return row.tag === value;
          },
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          }
        }

    }

</script>

<style src="../../../static/css/datasource.css"></style>
