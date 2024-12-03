<template>
  <br />
  <br />
  <br />
  <!-- Section Title -->
  <div class="container text-center section-title mb-5">
    <h2>Services</h2>
    <p class="lead">What your choice</p>
  </div>
  <!-- End Section Title -->

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
      <!-- Service Item 1 -->
      <div class="col" data-aos-delay="100">
        <div class="service-item text-center border rounded p-4 shadow-sm">
          <div class="icon mb-3">
            <i class="bi bi-cash-stack" style="color: #0dcaf0; font-size: 3rem"></i>
          </div>
          <a href="http://localhost:5173/listuser">
            <h3>Quản lý người dùng</h3>
          </a>
          <p>
            Quản lý người dùng cho phép đăng ký, đăng nhập, cập nhật thông tin, phân quyền và theo
            dõi hoạt động tài khoản.
          </p>
        </div>
      </div>
      <!-- End Service Item -->

      <!-- Service Item 2 -->
      <div class="col" data-aos-delay="200">
        <div class="service-item text-center border rounded p-4 shadow-sm">
          <div class="icon mb-3">
            <i class="bi bi-calendar4-week" style="color: #fd7e14; font-size: 3rem"></i>
          </div>
          <router-link to="/createpost">
            <h3>Quản lý Blog</h3>
          </router-link>
          <p>
            Quản lý blog cho phép thêm, sửa, xóa, xem thông tin, và phân loại video, cũng như quản
            lý các bình luận.
          </p>
        </div>
      </div>
      <!-- End Service Item -->

      <!-- Service Item 3 -->
      <div class="col" data-aos-delay="300">
        <div class="service-item text-center border rounded p-4 shadow-sm">
          <div class="icon mb-3">
            <i class="bi bi-chat-text" style="color: #20c997; font-size: 3rem"></i>
          </div>
          <a href="#">
            <h3>Coming soon...</h3>
          </a>
          <p>
            Coming soon... <br />
            <br />
            <br />
          </p>
        </div>
      </div>
      <!-- End Service Item -->
    </div>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
export default {
  // ... (remaining component code)
}
</script>

<style scoped>
/* Ensure that the link works properly */
.stretched-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
