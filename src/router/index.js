import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import UserProfile from '../views/UserProfile.vue';
import PostList from '../views/PostList.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
import Hello from '../views/Hello.vue';
import Bai3 from '../views/Bai3.vue';
import Bai4 from '../views/Bai4.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: UserProfile },
  { path: '/posts', component: PostList },
  { path: '/postsdetail', component: PostDetail },
  { path: '/createpost', component: CreatePost },
  { path: '/hello', component: Hello },
  { path: '/bai3', component: Bai3 },
  { path: '/bai4', component: Bai4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
