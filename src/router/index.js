import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component: Layout,
    redirect:'/dashboard',
    children:[{
      path:'dashboard',
      name:'Dashboard',
      component:() => import('@/views/dashboard/index'),
      meta:{title:'Dashboard',icon:'dashboard'}
    }]
  },
  {
    path: '/example1',
    component: Layout,
    redirect: '/example/table',
    name:"Example1",
    meta:{title:'Example1',icon:'example'},
    children: [{
      path: 'table',
      name: 'Table',
      component:() => import('@/views/table/index'),
      meta:{title: 'Table',icon:'table'}
    },
    {
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/tree/index'),
      meta: { title: 'Tree', icon: 'tree' }
    },]},
  {
    name:"Form",
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router
