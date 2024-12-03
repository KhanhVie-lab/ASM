<template>
  <br />
  <br />
  <div class="container mt-4">
    <h2>Hồ Sơ Của Bạn</h2>
    <div class="card p-3">
      <form @submit.prevent="updateProfile">
        <div class="mb-3">
          <label for="username" class="form-label">Tên Đăng Nhập:</label>
          <p>{{ user.username }}</p>
        </div>

        <div class="mb-3">
          <label for="fullname" class="form-label">Tên:</label>
          <input type="text" class="form-control" v-model="user.fullname" id="fullname" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Giới Tính:</label>
          <div>
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                v-model="user.gender"
                value="Nam"
                required
              />
              Nam
            </label>
            <label class="form-check-label ml-3">
              <input
                type="radio"
                class="form-check-input"
                v-model="user.gender"
                value="Nữ"
                required
              />
              Nữ
            </label>
            <label class="form-check-label ml-3">
              <input type="radio" class="form-check-input" v-model="user.gender" value="Khác" />
              Khác
            </label>
          </div>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Mật Khẩu:</label>
          <input
            type="password"
            class="form-control"
            :value="user.password"
            id="password"
            readonly
          />
          <button
            type="button"
            class="btn btn-link mt-2 p-0"
            data-bs-toggle="modal"
            data-bs-target="#changePasswordModal"
          >
            Đổi Mật Khẩu
          </button>
        </div>

        <button type="submit" class="btn btn-primary">Cập Nhật Hồ Sơ</button>
      </form>
    </div>

    <!-- Modal Đổi Mật Khẩu -->
    <div
      class="modal fade"
      id="changePasswordModal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Đổi Mật Khẩu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="changePassword">
              <div class="mb-3">
                <label for="currentPassword" class="form-label">Mật Khẩu Hiện Tại:</label>
                <input
                  type="password"
                  v-model="passwordForm.current"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">Mật Khẩu Mới:</label>
                <input type="password" v-model="passwordForm.new" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Xác Nhận Mật Khẩu Mới:</label>
                <input
                  type="password"
                  v-model="passwordForm.confirm"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Xác Nhận</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('currentUser')),
      passwordForm: {
        current: '',
        new: '',
        confirm: '',
      },
    }
  },
  methods: {
    updateProfile() {
      let users = JSON.parse(localStorage.getItem('users'))
      const userIndex = users.findIndex((user) => user.username === this.user.username)

      if (userIndex !== -1) {
        users[userIndex] = this.user
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('currentUser', JSON.stringify(this.user))
        Swal.fire({
          icon: 'success',
          title: 'Cập nhật thông tin thành công!',
          text: 'Thông tin đã được cập nhật.',
        })
      }
    },
    changePassword() {
      if (this.passwordForm.current !== this.user.password) {
        Swal.fire({
          icon: 'error',
          title: 'Mật khẩu hiện tại không đúng!',
          text: 'Vui lòng nhập lại mật khẩu.',
        })
        return
      }
      if (this.passwordForm.new !== this.passwordForm.confirm) {
        Swal.fire({
          icon: 'error',
          title: 'Mật khẩu mới và xác nhận không khớp!',
          text: 'Vui lòng nhập mật khẩu khác.',
        })
        return
      }
      if (this.passwordForm.current == this.passwordForm.new) {
        Swal.fire({
          icon: 'error',
          title: 'Mật khẩu cũ và mật khẩu mới không được trùng nhau!',
          text: 'Vui lòng nhập mật khẩu khác.',
        })
        return
      }

      // Cập nhật mật khẩu
      let users = JSON.parse(localStorage.getItem('users'))
      const userIndex = users.findIndex((user) => user.username === this.user.username)

      if (userIndex !== -1) {
        users[userIndex].password = this.passwordForm.new
        localStorage.setItem('users', JSON.stringify(users))
        this.user.password = this.passwordForm.new
        localStorage.setItem('currentUser', JSON.stringify(this.user))

        // Reset form và đóng modal
        this.passwordForm = { current: '', new: '', confirm: '' }
        const modal = new document.getElementById('changePasswordModal')
        modal.hide()
        Swal.fire({
          icon: 'success',
          title: 'Đổi mật khẩu thành công!',
          text: 'Đổi mật khẩu đã được cập nhật.',
        })
      }
    },
  },
}
</script>
