<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>管理需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column class="requirement_id" prop="requirement_id" label="项目id" width="120">
            </el-table-column>
            <el-table-column class="requirement_name" prop="requirement_name" label="项目名称" width="280">
            </el-table-column>
            <el-table-column class="requirement_type" prop="requirement_type" label="项目类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column class="tag" prop="tag" label="标签" width="100" :filters="[{ text: '发布中', value: '发布中' }, { text: '开发中', value: '开发中' },{ text: '已完成', value: '已完成' }]" :filter-method="filterTag" filter-placement="bottom-end">
              <template scope="scope">
                <el-tag
                  :type="scope.row.tag === '开发中' ? 'primary' : 'success'"
                  close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
          <el-table-column label="操作" width="200">
          <template scope="scope">
            <router-link :to="{name:'singlerequirement',params:{id:scope.row.requirement_id}}">  <el-button
                size="small"
                >编辑</el-button></router-link>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row, scope.row.requirement_id)">删除</el-button>
          </template>
          </el-table-column>

        </el-table>
<!--         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
        </el-pagination>
 -->
    </div>


</template>

<script>
    import axios from 'axios';
    import server from '../../../config/index';
    import router from '../../router/index.js';
    import { Message } from 'element-ui';

    export default {
        data() {
            return {
                url: server.url + '/api/requirement',

                tableData: null,
                currentPage1: 1,
                //默认每页数据量
                pagesize: 10,

                //当前页码
                currentPage: 1,

                //查询的页码
                start: 1,

                //默认数据总数
                totalCount: 1000,
            }

        },
        created () {
          var that = this;
          axios.get(this.url, {'headers': {'Authorization': sessionStorage.getItem('token')}})
          .then(function(response) {
            if(response.data.status==200){
              that.tableData = response.data.result;
              for (var index = 0; index < that.tableData.length; index++) {
                // console.log(that.tableData[index]);
                if (that.tableData[index].requirement_state == 1)
                  that.tableData[index]['tag'] = '发布中';
                else if (that.tableData[index].requirement_state == 2)
                  that.tableData[index]['tag'] = '开发中';
                else if (that.tableData[index].requirement_state == 3)
                  that.tableData[index]['tag'] = '已完成';
                else
                  that.tableData[index]['tag'] = '错误';
              }
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
          },

          handleDelete(index, row, requirement_id) {
            // router.go('/requirement');
            // router.push({name:'requirement'});
            // Message.success("删除成功");
            var url_operation = server.url + '/api/requirement/' + requirement_id
            axios.delete(url_operation)
            .then(function(response) {
              if(response.data.status==200){
                router.go(0);
                Message.success("删除需求成功！")
              }else {
                console.log(response.data.status);
              }

            }).catch(function (error) {
              console.log(error);
            });
          },
          //每页显示数据量变更
              handleSizeChange: function(val) {
                  this.pagesize = val;
                  this.loadData(this.criteria, this.currentPage, this.pagesize);
              },

              //页码变更
              handleCurrentChange: function(val) {
                  this.currentPage = val;
                  this.loadData(this.criteria, this.currentPage, this.pagesize);
              },
        }

    }
</script>

<style src="../../../static/css/datasource.css"></style>
