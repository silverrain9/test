import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '../../../components/layout/Layout';

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'default',
    hidden: true,
    children: [{
      path: 'default',
      component: () => import('@/components/allDefault/index'),
      meta: { title: '默认页', icon: 'default' }
    },{
      path: '/unLogin',
      component: () => import('@/components/allDefault/unLogin'),
      meta: { title: '登录失效', icon: 'unLogin' }
    }],
  },
  {
    path: '/bactRealTime',
    component: Layout,
    redirect: 'bactRealTime',
    meta: {
      title: '辅助决策统计',
    },
    children: [
      {
        name:'qczs',
        path: 'qczs',
        component: () => import('@/views/fzjcProject_1.0.1_branch1/components/bactRealTime/bactRealTime'),
        meta: { title: '疫苗实种情况统计'}
      }
    ]
  },
]

export default new Router({
  routes: constantRouterMap
})
