import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Todo from '@/pages/Todo.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/todo', name: 'Todo', component: Todo },
  { path: '/:catchAll(.*)*', name: 'NotFoundPage', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
