<template>
    <div class="table">
        <!--<table class="">-->

        <datasource language="en" :table-data="getData" :columns="columns" :pagination="information.pagination"
                    :actions="actions"
                    v-on:change="changePage"
                    v-on:searching="onSearch"></datasource>

       
        <!--<el-form ref="form" :model="form" label-width="80px">-->
            <!--<el-form-item>-->
                <!--<el-button type="primary" @click="prevStep">上一步</el-button>-->
                <!--<el-button type="primary" @click="nextStep">下一步</el-button>-->
            <!--</el-form-item>-->
        <!--</el-form>-->

        <!--</table>-->
        

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
                        key: 'id',
                    },
                    {
                        name: '估算是否完成',
                        key: 'fin',
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
                            self.$message('选中的行数： ' + row.row.id);
                            var param = {id:row.row.id};
                            self.$router.push({ path: '/step1', query: param});
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
            // jumpTo:function () {
            //     this.$router.push({ path: '/report'})
            // }
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
            axios.get('/static/estimationrecords.json').then( (res) => {
                var response_data = res.data;

                this.$http.get('http://localhost:8011/estimation/getAllRequirements').then(response => {

                   console.log(response.body[0].description.projectName);

                    //这里只取了第一条记录，注意如果mongo字段为空，前段会报错的
                   // for(var i=0; i<response.body.length; i++){
                    for(var i=0; i<1; i++){
                       response_data.data.push({
                           projectName:response.body[i].description.projectName,
                           id:response.body[i].id,
                           fin:response.body[i].description.projectName
                       });
                   }
                   this.information = response_data;



                   }, response => {
                     
                     console.log("error");
                });
            })
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>