<template>
    <br><br><br><br><br>
    <div class="container-fluid mt-6">
      <div class="login-card p-4 rounded shadow-lg">
        <h2 class="text-center mb-4">Register</h2>
        <form >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Username</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Sign up</button>
          <div class="text-center mt-3">
            <router-link to="/login" class="text-decoration-none">Alrealy have an account</router-link>
          </div>
        </form>
      </div>
    </div>
    <br><br><br><br><br>
  </template>
  
  <script>
  export default {
    name: 'register',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        if (this.email && this.password) {
          alert(`Logged in with Email: ${this.email}`);
        } else {
          alert('Please fill in all fields.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar{
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
    width: 800px;
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
  