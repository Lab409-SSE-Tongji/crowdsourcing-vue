<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的开发</el-breadcrumb-item>
                <el-breadcrumb-item>我的项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
          <el-table-column class="requirement_name" prop="requirement_name" label="项目id" width="120">
          </el-table-column>
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
          //   if (that.tableData[index].project_state == 1)
          //     that.tableData[index]['tag'] = '申请中';
          //   else if (that.tableData[index].projectState == 2)
          //     that.tableData[index]['tag'] = '开发中';
          //   else if (that.tableData[index].projectState == 3)
          //     that.tableData[index]['tag'] = '已完成';
          //   else
          //     that.tableData[index]['tag'] = '错误';
          // }
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
