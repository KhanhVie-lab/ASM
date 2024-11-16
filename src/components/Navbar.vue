<template>
<!-- Navbar -->
<header>
  <nav class="navbar navbar-expand-lg navbar-dark gradient-custom">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Navbar brand -->
    <a class="navbar-brand" href="#">KhVe</a>

    <!-- Toggle button -->
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars text-light"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" aria-current="page" href="http://localhost:5173/">
            <div>
              <i class="fas fa-home fa-lg mb-1"></i>
            </div>
            Home
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link" href="http://localhost:5173/posts">
            <div>
              <i class="far fa-envelope fa-lg mb-1"></i>
            </div>
            Post
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link" href="http://localhost:5173/createpost">
            <div>
              <i class="far fa-envelope fa-lg mb-1"></i>
            </div>
            Upload
          </a>
        </li>
        
      </ul>
      <!-- Left links -->

      <!-- Right links -->
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link" href="http://localhost:5173/login">
            <div>
              <i class="fas fa-bell fa-lg mb-1"></i>
            </div>
            Đăng nhập
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link" href="http://localhost:5173/register">
            <div>
              <i class="fas fa-globe-americas fa-lg mb-1"></i>
            </div>
            Đăng ký
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link" href="http://localhost:5173/profile">
            <div>
              <i class="fas fa-bell fa-lg mb-1"></i>
            </div>
            Tài khoản
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
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  header{
    position: fixed;
    left: 0;
    width: 100%;
  }
  .navbar{
    position: fixed;
    left: 0;
    width: 100%;
  }
  .btn {
  padding: .45rem 1.5rem .35rem;
}

.gradient-custom {
  background: #5678e7;

  background: -webkit-linear-gradient(to right, rgba(196, 113, 245, 1), rgb(113, 122, 250));

  background: linear-gradient(to right, rgb(113, 122, 245), rgb(113, 115, 250))
}
  </style>
  