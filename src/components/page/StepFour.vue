<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item>创建需求这是步骤4！</el-breadcrumb-item>
                <el-breadcrumb-item>添加非功能性需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">  
                <el-form-item label="系统对安全性的要求">
                    <p>
                        <input type="radio" name="picked" value="1" v-model="picked">1
                        <input type="radio" name="picked" value="2" v-model="picked">2 
                        <input type="radio" name="picked" value="3" v-model="picked">3 
                        <input type="radio" name="picked" value="4" v-model="picked">4
                        <input type="radio" name="picked" value="5" v-model="picked">5
                    </p>
                </el-form-item> 
                <el-form-item label="系统对可靠性的要求">
                    <p>
                        <input type="radio" name="picked2" value="" v-model="picked">1
                        <input type="radio" name="picked2" value="" v-model="picked">2 
                        <input type="radio" name="picked2" value="" v-model="picked">3 
                        <input type="radio" name="picked2" value="" v-model="picked">4
                        <input type="radio" name="picked2" value="" v-model="picked">5
                    </p>
                </el-form-item>  
                <el-form-item label="系统的开发语言">
                    <el-select v-model="form.language" placeholder="请选择">
                        <el-option label="Java" value="Java"></el-option>
                        <el-option label="C／C++" value="C／C++"></el-option>
                        <el-option label="JavaScript" value="JavaScript"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="系统的类型">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option label="Windows" value="Windows"></el-option>
                        <el-option label="Mac OS" value="Mac OS"></el-option>
                        <el-option label="iOS" value="iOS"></el-option>
                        <el-option label="Android" value="Android"></el-option>
                    </el-select>
                </el-form-item>       
                <el-form-item>
                    <el-button type="primary" @click="prevStep">上一步</el-button>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button type="primary" @click="onSave">保存</el-button>
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
                    desc: ''
                }
                        
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            },
            onSave() {
                this.$message.success('保存成功！');
                JSON.stringify(form);
            },
            prevStep:function(){
                this.$router.push( {path:'/step3'});
            }
        }

        //RequestMapping(value = "/addAllEntity/{id}",method = RequestMethod.POST)
    }
</script>