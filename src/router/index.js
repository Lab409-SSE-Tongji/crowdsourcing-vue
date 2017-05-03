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
                },

                {
                    path: '/estimationstep1',
                        component: resolve => require(['../components/page/estimation/estimationstep1.vue'], resolve)    // estimationstep1
                },
                {
                    path: '/estimationstep2',
                        component: resolve => require(['../components/page/estimation/estimationstep2.vue'], resolve)    // estimationstep2
                },
                {
                    path: '/estimationstep3',
                        component: resolve => require(['../components/page/estimation/estimationstep3.vue'], resolve)    // estimationstep3
                },
                {
                    path: '/estimationstep4',
                        component: resolve => require(['../components/page/estimation/estimationstep4.vue'], resolve)    // estimationstep4
                },
                {
                    path: '/estimationindex',
                        component: resolve => require(['../components/page/estimation/estimationindex.vue'], resolve)    // estimationindex
                },
                {
                    path: '/estimationrecords',
                        component: resolve => require(['../components/page/estimation/estimationrecords.vue'], resolve)    // estimationrecords
                },
                {
                    path: '/estimationreport',
                        component: resolve => require(['../components/page/estimation/estimationreport.vue'], resolve)    // estimationreport
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
