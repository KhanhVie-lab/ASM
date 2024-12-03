<template>
  <div class="container">
    <h2 class="mb-4">Trang Quản Lý Tài Khoản</h2>

    <!-- Danh sách tài khoản -->
    <div class="mb-4">
      <h3>Danh Sách Tài Khoản</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tên Đăng Nhập</th>
            <th scope="col">Tên</th>
            <th scope="col">Giới Tính</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.username }}</td>
            <td>{{ user.fullname }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editUser(user, index)">Sửa</button> |
              <button class="btn btn-danger btn-sm" @click="deleteUser(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Thêm/Sửa tài khoản -->
    <div class="card p-3">
      <h3>{{ isEditMode ? 'Sửa Tài Khoản' : 'Thêm Tài Khoản' }}</h3>
      <form @submit.prevent="isEditMode ? updateUser() : addUser()">
        <div class="mb-3">
          <label for="username" class="form-label">Tên Đăng Nhập</label>
          <input
            type="text"
            class="form-control"
            v-model="currentUser.username"
            id="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="fullname" class="form-label">Tên</label>
          <input
            type="text"
            class="form-control"
            v-model="currentUser.fullname"
            id="fullname"
            required
          />
        </div>

        <!-- Giới tính -->
        <div class="mb-3">
          <label class="form-label">Giới Tính</label>
          <div>
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                v-model="currentUser.gender"
                value="Nam"
                required
              />
              Nam
            </label>
            <label class="form-check-label ml-3">
              <input
                type="radio"
                class="form-check-input"
                v-model="currentUser.gender"
                value="Nữ"
                required
              />
              Nữ
            </label>
            <label class="form-check-label ml-3">
              <input
                type="radio"
                class="form-check-input"
                v-model="currentUser.gender"
                value="Khác"
              />
              Khác
            </label>
          </div>
        </div>

        <!-- Mật khẩu -->
        <div class="mb-3">
          <label for="password" class="form-label">Mật Khẩu</label>
          <input
            type="password"
            class="form-control"
            v-model="currentUser.password"
            id="password"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          {{ isEditMode ? 'Cập Nhật' : 'Thêm' }}
        </button>
      </form>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      users: JSON.parse(localStorage.getItem('users') || '[]'), // Lấy danh sách tài khoản từ localStorage
      currentUser: {
        username: '',
        fullname: '',
        gender: '', // Thêm trường giới tính
        password: '', // Thêm trường mật khẩu
      },
      isEditMode: false, // Biến điều khiển chế độ chỉnh sửa
      editIndex: null, // Chỉ số của tài khoản đang sửa
    }
  },
  methods: {
    // Thêm tài khoản mới
    addUser() {
      if (this.users.some((user) => user.username === this.currentUser.username)) {
        Swal.fire({
          icon: 'error',
          title: 'Tài Khoản Đã Tồn Tại',
          text: 'Tên đăng nhập này đã có sẵn!',
        })
        return
      }

      this.users.push({
        username: this.currentUser.username,
        fullname: this.currentUser.fullname,
        gender: this.currentUser.gender, // Lưu giới tính
        password: this.currentUser.password, // Lưu mật khẩu
      })

      this.updateLocalStorage()
      this.resetForm()
      Swal.fire({
        icon: 'success',
        title: 'Tạo Tài Khoản Thành Công',
        text: 'Tài khoản mới đã được thêm.',
      })
    },

    // Cập nhật tài khoản
    updateUser() {
      this.users[this.editIndex] = {
        username: this.currentUser.username,
        fullname: this.currentUser.fullname,
        gender: this.currentUser.gender, // Cập nhật giới tính
        password: this.currentUser.password, // Cập nhật mật khẩu
      }

      this.updateLocalStorage()
      this.resetForm()
      Swal.fire({
        icon: 'success',
        title: 'Cập Nhật Thành Công',
        text: 'Thông tin tài khoản đã được cập nhật.',
      })
    },

    // Xóa tài khoản
    deleteUser(index) {
      Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa tài khoản này?',
        text: 'Tài khoản này sẽ bị xóa vĩnh viễn.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
      }).then((result) => {
        if (result.isConfirmed) {
          this.users.splice(index, 1)
          this.updateLocalStorage()
          Swal.fire({
            icon: 'success',
            title: 'Tài Khoản Đã Bị Xóa',
            text: 'Tài khoản đã được xóa thành công.',
          })
        }
      })
    },

    // Cập nhật dữ liệu vào localStorage
    updateLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users))
    },

    // Đặt lại form
    resetForm() {
      this.currentUser.username = ''
      this.currentUser.fullname = ''
      this.currentUser.gender = '' // Đặt lại giới tính
      this.currentUser.password = '' // Đặt lại mật khẩu
      this.isEditMode = false
      this.editIndex = null
    },

    // Chỉnh sửa tài khoản
    editUser(user, index) {
      this.currentUser.username = user.username
      this.currentUser.fullname = user.fullname
      this.currentUser.gender = user.gender // Lấy giới tính từ người dùng
      this.currentUser.password = user.password // Lấy mật khẩu từ người dùng
      this.isEditMode = true
      this.editIndex = index
    },
  },
}
</script>
