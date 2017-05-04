<template>
    <div class="table">
        <!--<table class="">-->

        <datasource language="en" :table-data="getData" :columns="columns" :pagination="information.pagination"
                    :actions="actions"
                    v-on:change="changePage"
                    v-on:searching="onSearch"></datasource>

        <button class="btn btn-white btn-xs" v-on:click="jumpTo"> 查看报告</button>
        <button class="btn btn-white btn-xs" v-on:click="jumpTo"> 继续编辑</button>
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
                this.$router.push({ path: '/report'})
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

<style src="../../../static/css/datasource.css"></style>