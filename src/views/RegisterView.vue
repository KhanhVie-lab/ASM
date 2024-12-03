<template>
  <br /><br /><br /><br /><br />
  <div class="container-fluid mt-6 d-flex justify-content-center align-items-center">
    <div class="login-card p-4 rounded shadow-lg">
      <h2 class="text-center mb-4">Register</h2>
      <form @submit.prevent="registerUser">
        <div class="mb-3">
          <label for="username" class="form-label">Tên Đăng Nhập</label>
          <input
            type="text"
            class="form-control"
            v-model="newUser.username"
            id="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mật Khẩu</label>
          <input
            type="password"
            class="form-control"
            v-model="newUser.password"
            id="password"
            required
          />
        </div>
        <div class="mb-3">
          <label for="fullname" class="form-label">Tên</label>
          <input
            type="text"
            class="form-control"
            v-model="newUser.fullname"
            id="fullname"
            required
          />
        </div>

        <!-- Thêm phần giới tính -->
        <div class="mb-3">
          <label class="form-label">Giới Tính:</label>
          <div>
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                v-model="newUser.gender"
                value="Nam"
                required
              />
              Nam
            </label>
            <label class="form-check-label ml-3">
              <input
                type="radio"
                class="form-check-input"
                v-model="newUser.gender"
                value="Nữ"
                required
              />
              Nữ
            </label>
            <label class="form-check-label ml-3">
              <input type="radio" class="form-check-input" v-model="newUser.gender" value="Khác" />
              Khác
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Đăng Ký</button>
      </form>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
  <br /><br /><br /><br /><br />
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      newUser: {
        username: '',
        password: '',
        fullname: '',
        gender: '', // Thêm trường giới tính
      },
    }
  },
  methods: {
    // Đăng ký tài khoản
    registerUser() {
      let users = JSON.parse(localStorage.getItem('users') || '[]')

      // Kiểm tra xem tài khoản đã tồn tại chưa
      if (users.some((user) => user.username === this.newUser.username)) {
        Swal.fire({
          icon: 'error',
          title: 'Tài khoản đã tồn tại!',
          text: 'Vui lòng chọn tài khoản khác.',
        })
        return
      }

      // Thêm người dùng mới vào danh sách
      const user = {
        username: this.newUser.username,
        password: this.newUser.password,
        fullname: this.newUser.fullname,
        gender: this.newUser.gender, // Lưu giới tính vào thông tin người dùng
      }

      users.push(user)

      localStorage.setItem('users', JSON.stringify(users))

      Swal.fire({
        icon: 'success',
        title: 'Đăng ký thành công!',
        text: 'Bạn có thể đăng nhập ngay bây giờ.',
      })

      this.$router.push('/login')
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
