<template>
  <br /><br /><br /><br /><br />
  <div class="container-fluid mt-6 d-flex justify-content-center align-items-center">
    <div class="login-card p-4 rounded shadow-lg">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="loginUser">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="username"
            v-model="username"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
        <div class="text-center mt-3">
          <router-link to="/register" class="text-decoration-none"
            >Don't have an account? Register</router-link
          >
        </div>
      </form>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
  <br /><br /><br /><br /><br />
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    loginUser() {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
      const user = storedUsers.find(
        (user) => user.username === this.username && user.password === this.password,
      )

      if (user) {
        if (user.username === 'admin@gmail.com' && user.password === 'admin') {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.$router.push('/admin')
        } else {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.$router.push('/posts')
        } // Chuyển hướng nếu đăng nhập thành công
      } else {
        this.errorMessage = 'Tên đăng nhập hoặc mật khẩu không đúng'
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  left: 0;
  width: 100%;
}
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Căn giữa theo chiều dọc */
  background: linear-gradient(to right, #007bff, #6610f2);
  color: #fff;
}

.login-card {
  max-width: 4000px;
  width: 500px;
  background-color: #fff;
  color: #333;
  border-radius: 15px; /* Bo góc cho thẻ login */
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Tạo bóng mờ cho thẻ */
}

.form-control {
  border-radius: 20px;
}

.btn-primary {
  border-radius: 20px;
}

h2 {
  color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.text-decoration-none {
  color: #007bff;
}

.text-decoration-none:hover {
  text-decoration: underline;
}
</style>
