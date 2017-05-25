import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/skill',
                    component: resolve => require(['../components/page/Skill.vue'], resolve)
                },
                {
                    path: '/requirement',
                    component: resolve => require(['../components/page/Requirement.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/create_requirement',
                    component: resolve => require(['../components/page/CreateRequirement.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/skillupload',
                    component: resolve => require(['../components/page/SkillUpload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/project',
                    component: resolve => require(['../components/page/Project.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
                },
                {
                    path: '/mixcharts',
                    component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path:'/register',
            component:resolve =>require(['../components/page/Register.vue'],resolve)
        },

    ]
})
