<template>
    <div class="table">
        <!--<table class="">-->

            <datasource language="en" :table-data="getData" :columns="columns" :pagination="information.pagination"
                        :actions="actions"
                        v-on:change="changePage"
                        v-on:searching="onSearch"></datasource>

            <button class="btn btn-white btn-xs" v-on:click="jumpTo"> 查看报告</button>
            <button class="btn btn-white btn-xs" v-on:click="jumpTo"> 继续编辑</button>

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
                        key: 'name',
                    },
                    {
                        name: '创建时间',
                        key: 'time',
                    },
                    {
                        name: '估算是否完成',
                        key: 'fin',
                    }
                ],
                actions: [
                    {
                        text: 'Click',
                        class: 'btn-primary',
                        event(e, row) {
                            self.$message('选中的行数： ' + row.row.id);
                        }
                    },
//                    {
//                        text: 'check',
//                        class: 'btn-primary',
//
//                    }
                ],
                query:''
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
            jumpTo:function () {
                this.$router.push({ path: '/estimationreport'})
            }
        },
        computed:{
            getData(){
                const self = this;
                return self.information.data.filter(function (d) {
                    if(d.name.indexOf(self.query) > -1){
                        return d;
                    }
                })
            }
        },
        beforeMount(){
            axios.get('/static/estimationrecords.json').then( (res) => {
                this.information = res.data;
            })
        }
    }
</script>

<style src="../../../../static/css/datasource.css"></style>