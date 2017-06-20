import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/readme',
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
                    path: '/skillupload',
                    component: resolve => require(['../components/page/SkillUpload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/requirement/:id',
                    name:'singlerequirement',
                    component: resolve => require(['../components/page/SingleRequirement.vue'], resolve)
                },
                {
                    path: '/project',
                    component: resolve => require(['../components/page/Project.vue'], resolve)       // Vue-Core-Image-Upload组件
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
        {
          path:'/market',
          component:resolve =>require(['../components/market/Market.vue'],resolve)
        },
        {
          path:'/market/:id',
          name:'publicSingleRequirement',
          component: resolve => require(['../components/market/SingleRequirement.vue'], resolve)
        }

    ]
})
