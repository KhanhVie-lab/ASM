import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import UserProfile from '../views/UserProfile.vue';
import PostList from '../views/PostList.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: UserProfile },
  { path: '/posts', component: PostList },
  { path: '/postsdetail', component: PostDetail },
  { path: '/createpost', component: CreatePost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
