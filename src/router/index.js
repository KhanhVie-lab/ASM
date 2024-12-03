import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import UserProfile from '../views/UserProfile.vue'
import PostList from '../views/PostList.vue'
import PostDetail from '../views/PostDetail.vue'
import CreatePost from '@/views/BlogManagement.vue'
import Hello from '../views/Hello.vue'
import Bai3 from '../views/Bai3.vue'
import Bai4 from '../views/Bai4.vue'
import ListUsers from '../views/ListUsers.vue'
import Admin from '../views/AdminView.vue'
import Upload from '../views/CreatePost.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: UserProfile },
  { path: '/posts', component: PostList },
  { path: '/post/:index', component: PostDetail },
  { path: '/createpost', component: CreatePost },
  { path: '/hello', component: Hello },
  { path: '/bai3', component: Bai3 },
  { path: '/bai4', component: Bai4 },
  { path: '/listuser', component: ListUsers },
  { path: '/admin', component: Admin },
  { path: '/upload', component: Upload },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null

  // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập khi truy cập trang yêu cầu đăng nhập
  if (to.path === '/profile' || (to.path === '/upload' && !currentUser)) {
    next('/login') // Chuyển hướng đến trang đăng nhập
  } else if (
    (to.path === '/listuser' || to.path === '/createpost' || to.path === '/admin') &&
    currentUser &&
    currentUser.username !== 'admin@gmail.com'
  ) {
    localStorage.removeItem('currentUser')
    next('/login')
  } else {
    next()
  }
})

export default router
