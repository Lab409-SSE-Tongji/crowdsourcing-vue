<!-- StepSix -->
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>我的需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/create'}">创建需求</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step1', query: param}">项目描述</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step2', query: param}">录入目标模型</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step3', query: param}">录入对象模型</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step4'}">计算UFP</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/step5'}">step5</el-breadcrumb-item>
                <el-breadcrumb-item>step6</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">  
                <el-form-item>
                    <el-button type="primary" @click="prevStep">上一步</el-button>
                    <el-button type="primary" @click="nextStep">下一步</el-button>
                    <el-button type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
            
        </div>

    </div>
</template>