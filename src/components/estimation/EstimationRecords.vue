<template>
    <div class="table">
        <!--<table class="">-->

        <datasource language="en" :table-data="getData" :columns="columns" :pagination="information.pagination"
                    :actions="actions"
                    v-on:change="changePage"
                    v-on:searching="onSearch"></datasource>

        

    </div>
</template>

<script>
    import axios from 'axios';
    import Datasource from 'vue-datasource';
    export default {
        data: function(){
            const self = this;
            return {
                information: {
                    pagination:{},
                    data:[]
                },
                columns: [
                    {
                        name: '项目名',
                        key: 'projectName',
                    },
                    {
                        name: '创建时间',
                        key: 'createTime',
                    }
                ],
                actions: [
                    
                    {
                        text: '查看报告',
                        class: 'btn-primary',
                        event() {
                            self.$router.push({ path: '/report'});
                        }
                    },
                    {
                        text: '继续编辑',
                        class: 'btn-primary',
                        event(e, row) {
                            self.$message('选中的id： ' + row.row.id);
                            var param = {id:row.row.id};
                            self.$router.push({ path: '/step1', query: param});
                        }
                    },
                    {
                        text: '删除记录',
                        class: 'btn-primary',
                        event(e, row) {
                            self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                              confirmButtonText: '确定',
                              cancelButtonText: '取消',
                              type: 'warning'
                            }).then(() => {
                              self.removeRecord(row.row.id);
                              self.updateTable();
                              //这里做的不好，应该是等待更新成功后，再探出对话框，后期改进      
                              self.$message({
                                type: 'success',
                                message: '删除成功!'
                              });
                            }).catch(() => {
                              
                              });
                           
                        }
                    }

                ],
                query: ''

            }
        },
        components: {
            Datasource
        },
        methods: {
            changePage(values) {
                this.information.pagination.per_page = values.perpage;
                this.information.data = this.information.data;
            },
            onSearch(searchQuery) {
                this.query = searchQuery;
            },
            removeRecord(id){
                console.log("remove"+id);
                this.$http.get('http://localhost:8011/estimation/removeOneRequirement/'+id).then(response => {

                   console.log("success");

        


                   }, response => {
                     
                     console.log("error");
                });
            },
            updateTable(){
                axios.get('/static/estimationrecords.json').then( (res) => {
                    var response_data = res.data;

                    this.$http.get('http://localhost:8011/estimation/getAllRequirements').then(response => {

                        //注意如果mongo字段为空，前段会报错的
                       for(var i=0; i<response.body.length; i++){
                            var newDate = new Date();
                            newDate.setTime(response.body[i].id);
                            var newTime = newDate.toLocaleString();
                           response_data.data.push({
                               id:response.body[i].id,
                               projectName:response.body[i].description.projectName,
                               createTime:newTime
                           });
                       }
                       this.information = response_data;



                       }, response => {
                         
                         console.log("error");
                    });
                })
            }
        },
        computed:{
            getData(){
                const self = this;
                return self.information.data.filter(function (d) {
                    if(d.projectName.indexOf(self.query) > -1){
                        return d;
                    }
                })
            }
        },
        beforeMount: function(){
            this.updateTable();
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>