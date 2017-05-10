<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
                <el-breadcrumb-item>调整数据模块</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="逻辑文件">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="" value=""></el-option>
                        <el-option label="" value=""></el-option>
                        <el-option label="" value=""></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="字段信息">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

                <el-form-item label="逻辑文件">
                    <el-upload
                    action="/api/posts/"
                    type="drag"
                    :thumbnail-mode="true"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-error="handleError"
                    :default-file-list="fileList"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-form-item>

                <el-form-item label="RET:">
                <a href="javascript:void(0)" @click="add">新增</a>
                    <p v-for="(test,index) in form.tests">
                        字段信息<el-input v-model="test.text" type="text" name="tests[]"></el-input><a href="javascript:void(0)" @click="remove(index)">删除</a>
                    </p>
                </el-form-item>
                <!-- <el-form-item label="多选框">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="步步高" name="type"></el-checkbox>
                        <el-checkbox label="小天才" name="type"></el-checkbox>
                        <el-checkbox label="imoo" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="单选框">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="步步高"></el-radio>
                        <el-radio label="小天才"></el-radio>
                        <el-radio label="imoo"></el-radio>
                    </el-radio-group>
                </el-form-item> -->
                <el-form-item label="逻辑文件类型">
                    <p>
                        <input type="radio" name="picked" value=1 v-model="picked">外部逻辑文件
                        <input type="radio" name="picked" value=0 v-model="picked">内部逻辑文件
                    </p>
                </el-form-item>
                
                
                <el-form-item>
                    <el-button type="primary" @click="prevStep">上一步</el-button>
                    <el-button type="primary" @click="nextStep">下一步</el-button>
                    <el-button type="primary" @click="">保存</el-button>
                </el-form-item>
            </el-form>
            
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    tests: [{
                        text: "one"
                    }]
                }
            }
        },
        methods: {
            prevStep() {
                this.$router.push( {path:'/step2'});
            },
            nextStep:function(){
                this.$router.push( {path:'/step4'});
            },
            add:function() {
                this.form.tests.push( {text:"one"})
            },
            remove(index) {
                this.form.tests.splice(index,1)
            }
        }
    }
</script>