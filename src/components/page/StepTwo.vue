<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求</el-breadcrumb-item>
                <el-breadcrumb-item>添加数据模块</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <!--<el-form-item label="功能名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="事务类型">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="EI" value="EI"></el-option>
                        <el-option label="EO" value="EO"></el-option>
                        <el-option label="EQ" value="EQ"></el-option>
                    </el-select>
                </el-form-item>-->
                <!--<el-form-item label="起止时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="项目经理">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>-->
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
                
                
                <!--<el-form-item label="附件上传">
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
                </el-form-item>-->
                
                <!--<el-form-item label="是否需要确认/保存等逻辑">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="是否需要返回成功/失败等状态">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="是否需要验证字段">
                    <el-switch on-text="" off-text="" v-model="form.delivery3"></el-switch>
                </el-form-item>-->
                <!--<el-form-item label="具体描述">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="步骤">
                <a href="javascript:void(0)" @click="add">新增</a>
                    <p v-for="(test,index) in form.tests">
                        <el-input v-model="test.text" type="text" name="tests[]"></el-input><a href="javascript:void(0)" @click="remove(index)">删除</a>
                    </p>
                </el-form-item>
                <el-form-item label="是否需要确认/保存等逻辑">
                    <p>
                        <input type="radio" name="picked" value=11 v-model="picked">是
                        <input type="radio" name="picked" value=10 v-model="picked">否
                    </p>
                </el-form-item>
                <el-form-item label="是否需要返回成功/失败等状态">
                    <p>
                        <input type="radio" name="picked1" value=21 v-model="picked">是
                        <input type="radio" name="picked1" value=20 v-model="picked">否
                    </p>
                </el-form-item>
                <el-form-item label="是否需要验证字段">
                    <p>
                        <input type="radio" name="picked2" value=31 v-model="picked">是
                        <input type="radio" name="picked2" value=30 v-model="picked">否
                    </p>
                </el-form-item>
                <li>-------------------------------------------------------------------------------------------------------</li>-->
                <!--<el-form-item label="步骤">-->
                <!--<el-button type="primary" @click="addFunc">添加</el-button>-->
                <!--<a href="javascript:void(0)" @click="addFunc">新增</a>-->
                    <p v-for="(table,index) in form.two">
                        <el-form-item label="功能名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="事务类型">
                            <el-select v-model="form.region" placeholder="请选择">
                                <el-option label="EI" value="EI"></el-option>
                                <el-option label="EO" value="EO"></el-option>
                                <el-option label="EQ" value="EQ"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="具体描述">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                
                        <el-form-item label="步骤">
                            <a href="javascript:void(0)" @click="add">新增</a>
                                <p v-for="(test,index) in form.tests">
                                    <el-input v-model="test.text" type="text" name="tests[]"></el-input><a href="javascript:void(0)" @click="remove(index)">删除</a>
                                </p>
                        </el-form-item>
                        <el-form-item label="逻辑操作的数量">
                            <p>
                                <el-select v-model="form.picked1" placeholder="请选择">
                                     <el-option label="0" value="0"></el-option>
                                     <el-option label="1" value="1"></el-option>
                                     <el-option label="2" value="2"></el-option>
                                     <el-option label="3" value="3"></el-option>
                                     <el-option label="4" value="4"></el-option>
                                     <el-option label="5" value="5"></el-option>
                                </el-select>
                            </p>
                        </el-form-item>
                        <el-form-item label="返回状态信息的数量">
                            <p>
                                <el-select v-model="form.picked2" placeholder="请选择">
                                     <el-option label="0" value="0"></el-option>
                                     <el-option label="1" value="1"></el-option>
                                     <el-option label="2" value="2"></el-option>
                                     <el-option label="3" value="3"></el-option>
                                     <el-option label="4" value="4"></el-option>
                                     <el-option label="5" value="5"></el-option>
                                </el-select>
                            </p>
                        </el-form-item>
                       <!--  <el-form-item label="是否需要验证字段">
                            <p>
                                <input type="radio" name="picked2" value=31 v-model="picked">是
                                <input type="radio" name="picked2" value=30 v-model="picked">否
                            </p>
                        </el-form-item> -->
                        <li>--------------------------------------------------------------------------------------------------</li>
                    <el-button type="primary" @click="removel(index)">删除</el-button>
                    </p>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addFunc">添加</el-button>
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
                    //region: '',
                    //date1: '',
                    //date2: '',
                    //delivery: true,
                    //type: ['步步高'],
                    //resource: '小天才',
                    //desc: '',
                    tests: [{
                        text: "one"
                    }],
                    two: [{
                        text: "two"
                    }]
                }
            }
        },
        methods: {
            prevStep:function() {
                this.$router.push( {path:'/step1'});
            },
            nextStep:function() {
                this.$router.push( {path:'/step3'});
            },
            add:function() {
                this.form.tests.push({
                    text: "123",
                })
            },
            remove(index) {
                this.form.tests.splice(index,1);
            },
            removel(index) {
                this.form.two.splice(index,1);
            },
            addFunc:function(){
                this.form.two.push({
                    text:"two"
                    //this.form);
                })
            }
        }
    }
</script>