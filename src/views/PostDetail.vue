<template>
  <section id="recent-posts" class="recent-posts section">
    <div class="container section-title">
      <h2>Recent Posts</h2>
      <p>Recent Blog Posts<br></p>
    </div>

    <!-- Video Post -->
    <div class="col-lg-12 col-md-12 col-sm-12 mb-4">
      <article>
        <div class="post-video2">
          <div class="post-img2">
                 <img :src="imageUrl" alt="" class="img-fluid">
               </div>
        </div>

        <p class="post-category">Entertainment</p>

        <h2 class="title">
          <a href="#">Chị đẹp đạp gió rẽ sóng mùa 2: <br>
            
          </a>
          Chị đẹp đạp gió rẽ sóng đã chính thức ra mắt quý vị khán giả với những màn trình diễn vô cùng ấn tượng <br>
          <button class="btn btn-outline-primary">Like</button> |
          <button class="btn btn-outline-success">Share</button>
        </h2>

        <div class="d-flex align-items-center">
          <img src="" alt="" class="img-fluid post-author-img flex-shrink-0">
          <div class="post-meta">
            <p class="post-author">Mark Dower</p>
            <p class="post-date">
              <time datetime="2022-01-01">Jun 22, 2022</time>
            </p>
          </div>
        </div>
      </article>

      <!-- Comment Section -->
      <div class="comments-section mt-4">
        <h3>Comments</h3>
        <div v-for="(comment, index) in comments" :key="index" class="comment-item">
          <strong>{{ comment.user }}</strong>: {{ comment.text }}
        </div>

        <!-- Comment Form -->
        <div class="comment-form mt-3">
          <input v-model="newComment" type="text" class="form-control" placeholder="Add a comment">
          <button @click="addComment" class="btn btn-primary mt-2">Post Comment</button>
        </div>
      </div>

      <!-- Recommended Videos -->
      <div class="recommended-videos mt-5">
        <h3>Recommended Blog</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="post-video">
          <div class="post-img">
                 <img :src="imageUrl2" alt="" class="img-fluid">
               </div>
        </div>
            <p class="post-category">Gameshow</p>
            <h2 class="title">
              <a href="#">Conan ra mắt tập cuối</a>
            </h2>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="post-video">
          <div class="post-img">
                 <img :src="imageUrl3" alt="" class="img-fluid">
               </div>
        </div>
            <p class="post-category">Gameshow</p>
            <h2 class="title">
              <a href="#">2 ngày 1 đêm</a>
            </h2>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="post-video">
          <div class="post-img">
                 <img :src="imageUrl4" alt="" class="img-fluid">
               </div>
        </div>
            <p class="post-category">Gameshow</p>
            <h2 class="title">
              <a href="#">Chị đẹp đạp gió rẽ sóng</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br> <br>
</template>

  <script>
  export default {
    data() {
      return {
        imageUrl: 'https://cloudvodhn.tek4tv.vn/attach/crawler/2024/08/31/28afe0d3-c2bc-4cd6-ad53-dc31a0c0ea9a-788.webp',
        imageUrl2: 'https://trungtamnhatngu.edu.vn/uploads/blog/2014_12/connan-nhatngusofl_1.jpg',
        imageUrl3: 'https://cdn.tuoitre.vn/471584752817336320/2023/9/28/kv-ngang-mua-2-them-text-1695876925190691477736.png',
        imageUrl4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFRRxj3mjFFrJ4NzDB3NAPwTLBAda0kKU4A&s',
        imageUrl5: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474113qfT/hinh-anh-tu-nhien-dep-binh-di_014859861.jpeg',
        imageUrl6: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474113qfT/hinh-anh-tu-nhien-dep-binh-di_014859861.jpeg'
    };
    },
  };
  </script>
  <style scoped>
  /* Sử dụng max-width để hạn chế chiều rộng */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;  /* Cho phép các phần tử bẻ xuống hàng mới */
  
    padding: 0 15px;  /* Đảm bảo có padding cho các thiết bị nhỏ */
  }
  
  /* Điều chỉnh khoảng cách và căn giữa cho tiêu đề */
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .post-video img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;  /* Thêm object-fit để ảnh không bị méo */

  }
  
  /* Đảm bảo rằng ảnh hiển thị đúng */
  .post-video img2 {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;  /* Thêm object-fit để ảnh không bị méo */
  }
  
  /* Điều chỉnh kiểu hiển thị của danh mục bài viết */
  .post-category {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 10px;  /* Thêm khoảng cách dưới danh mục */
  }
  
  /* Cập nhật kiểu dáng tiêu đề bài viết */
  .title a {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    display: block;
    margin: 10px 0;
  }
  
  /* Thêm hiệu ứng hover cho tiêu đề */
  .title a:hover {
    color: #007bff;
    text-decoration: underline;  /* Thêm underline khi hover */
  }
  
  /* Điều chỉnh kiểu ảnh tác giả và khoảng cách */
  .post-author-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover; /* Đảm bảo ảnh tác giả không bị méo */
  }
  
  /* Cập nhật kiểu hiển thị của meta thông tin bài viết */
  .post-meta p {
    margin: 0;
    font-size: 14px;
    color: #6c757d;
  }
  
  /* Điều chỉnh màu sắc của thời gian */
  .post-date time {
    color: #888;
  }
  
  /* Phản hồi với màn hình nhỏ */
  
  
     </style>
     