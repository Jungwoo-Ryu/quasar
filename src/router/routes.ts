import { RouteRecordRaw } from 'vue-router';
import LoginView from 'src/views/LoginView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '/forum',
    name: 'forumList',
    component: () => import('pages/forumBase.vue'),
    children: [{
      path: '', component: () => import('pages/forumList.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  }
];

export default routes;
