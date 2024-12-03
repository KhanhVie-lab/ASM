<template>
  <!-- Navbar -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark gradient-custom">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#">KhVe</a>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-light"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left links -->
          <!-- Navbar links -->
          <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li class="nav-item text-center mx-2 mx-lg-1">
              <a class="nav-link active" aria-current="page" href="/">
                <div>
                  <i class="fas fa-home fa-lg mb-1"></i>
                </div>
                Home
              </a>
            </li>

            <!-- Hiển thị Post nếu không phải admin -->
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="!isAdmin">
              <a class="nav-link" href="/posts">
                <div>
                  <i class="far fa-envelope fa-lg mb-1"></i>
                </div>
                Post
              </a>
            </li>
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="!isAdmin && isLoggedIn">
              <a class="nav-link" href="/upload">
                <div>
                  <i class="far fa-envelope fa-lg mb-1"></i>
                </div>
                Upload
              </a>
            </li>

            <!-- Hiển thị Upload nếu là user (không phải admin) -->
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="isAdmin">
              <a class="nav-link" href="/admin">
                <div>
                  <i class="far fa-envelope fa-lg mb-1"></i>
                </div>
                Services
              </a>
            </li>
          </ul>

          <!-- Left links -->

          <!-- Right links -->
          <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <!-- Hiển thị đăng nhập, đăng ký nếu chưa đăng nhập -->
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="!isLoggedIn && !isAdmin">
              <a class="nav-link" href="/login">
                <div>
                  <i class="fas fa-bell fa-lg mb-1"></i>
                </div>
                Đăng nhập
              </a>
            </li>
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="!isLoggedIn && !isAdmin">
              <a class="nav-link" href="/register">
                <div>
                  <i class="fas fa-globe-americas fa-lg mb-1"></i>
                </div>
                Đăng ký
              </a>
            </li>
            <!-- Hiển thị tài khoản, đăng xuất nếu đã đăng nhập -->
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="isLoggedIn">
              <a class="nav-link" href="/profile">
                <div>
                  <i class="fas fa-user fa-lg mb-1"></i>
                </div>
                Tài khoản
              </a>
            </li>
            <li class="nav-item text-center mx-2 mx-lg-1" v-if="isLoggedIn || isAdmin">
              <a class="nav-link" href="#" @click="logout">
                <div>
                  <i class="fas fa-sign-out-alt fa-lg mb-1"></i>
                </div>
                Đăng xuất
              </a>
            </li>
          </ul>
          <!-- Right links -->

          <!-- Search form -->
          <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-white" type="button" data-mdb-ripple-color="dark">
              Search
            </button>
          </form>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Biến lưu trạng thái đăng nhập
      isAdmin: false, // Biến kiểm tra xem có phải admin không
    }
  },
  created() {
    // Kiểm tra xem có người dùng đang đăng nhập không
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
      this.isLoggedIn = true
      this.isAdmin = currentUser.username === 'admin@gmail.com' // Nếu có người dùng thì thay đổi trạng thái
      // Kiểm tra xem có phải admin
    }
  },
  methods: {
    logout() {
      // Xóa thông tin người dùng khỏi localStorage và cập nhật lại trạng thái
      localStorage.removeItem('currentUser')
      this.isLoggedIn = false
      this.isAdmin = false
      this.$router.push('/login') // Chuyển hướng về trang đăng nhập sau khi đăng xuất
    },
  },
}
</script>

<style scoped>
header {
  left: 0;
  width: 100%;
}
.navbar {
  position: fixed;
  left: 0;
  width: 100%;
}
.btn {
  padding: 0.45rem 1.5rem 0.35rem;
}

.gradient-custom {
  background: #5678e7;
  background: -webkit-linear-gradient(to right, rgba(196, 113, 245, 1), rgb(113, 122, 250));
  background: linear-gradient(to right, rgb(113, 122, 245), rgb(113, 115, 250));
}
</style>
