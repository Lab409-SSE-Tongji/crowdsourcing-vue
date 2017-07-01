<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">            
                <el-form-item>
                    <el-button type="primary" @click="requirement">创建需求</el-button>
                    <el-button type="primary" @click="estimation">高级估算</el-button>
                </el-form-item>
            </el-form>

        </div>

    </div>
</template>

<script>
import "../../common/animate-custom.css";
import axios from 'axios';
import server from '../../../config/index';
import router from '../../router/index.js';
import { Message } from 'element-ui';
export default {
        data: function(){
            return {
              pickerOptions0: {
                 disabledDate(time) {
                   return time.getTime() < Date.now() - 8.64e7;
                 }
               },
                url: server.url + '/api/requirement',

                form: {
                    requirement_name: '',
                    requirement_type: '',
                    start_time: '',
                    end_time: '',
                    need_manager: 0,
                    requirement_detail: '',
                }
            }
        },
        methods: {
            estimation:function(){
                this.$router.push( {path:'/step1'});
            },
            requirement:function(){
                this.$router.push( {path:'/inputrequirement'});
            }
        }
    }
</script>
