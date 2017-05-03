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
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/step1',
                    component: resolve => require(['../components/page/StepOne.vue'], resolve)
                },
                {
                    path: '/step2',
                    component: resolve => require(['../components/page/StepTwo.vue'], resolve)
                },
                {
                    path: '/step3',
                    component: resolve => require(['../components/page/StepThree.vue'], resolve)
                },
                {
                    path: '/step4',
                    component: resolve => require(['../components/page/StepFour.vue'], resolve)
                },
                {
                    path: '/records',
                    component: resolve => require(['../components/page/EstimationRecords.vue'], resolve)
                },
                {
                    path: '/report',
                    component: resolve => require(['../components/page/EstimationReport.vue'], resolve)
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
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
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
