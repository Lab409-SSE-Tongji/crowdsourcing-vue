<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的开发</el-breadcrumb-item>
                <el-breadcrumb-item>我的项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="projectId" label="项目id" width="120">
            </el-table-column>
<!--             <el-table-column prop="project_name" label="项目名称" width="180">
            </el-table-column> -->
            <!-- <el-table-column prop="address" label="项目地址" show-overflow-tooltip>
            </el-table-column> -->
            <!-- <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '申请中', value: '申请中' },{ text: '开发中', value: '开发中' },{ text: '已完成', value: '已完成' }]" :filter-method="filterTag" filter-placement="bottom-end">
              <template scope="scope">
                <el-tag
                  :type="scope.row.tag === '开发中' ? 'primary' : 'success'"
                  close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column> -->
        </el-table>
    </div>
</template>

<script>
  import axios from 'axios';
  import server from '../../../config/index';
  import router from '../../router/index.js';
  export default {
    data() {
      return {
        url: server.url + '/api/project',

        tableData: null
      }
    },
    created () {
      var that = this;
      axios.get (this.url, {'headers': {'Authorization': sessionStorage.getItem('token')}})
      .then(function(response) {
        if(response.data.status == 200){
          that.tableData = response.data.result;
          // for (var index = 0; index < that.tableData.length; index++) {
          //   if (that.tableData[index].projectState == 1)
          //     that.tableData[index]['tag'] = '申请中';
          //   else if (that.tableData[index].projectState == 2)
          //     that.tableData[index]['tag'] = '开发中';
          //   else if (that.tableData[index].projectState == 3)
          //     that.tableData[index]['tag'] = '已完成';
          //   else
          //     that.tableData[index]['tag'] = '错误';
          // }
          console.log(that.tableData)
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
      }
    }
  }
</script>

<style src="../../../static/css/datasource.css"></style>
