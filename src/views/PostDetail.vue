<template>
  <br />
  <br />
  <div class="container">
    <h2>{{ post.title }}</h2>
    <p class="post-category">{{ post.category }}</p>
    <img :src="post.imageUrl" alt="Post Image" class="img-fluid mb-3" />
    <p>{{ post.content }}</p>
    <p><strong>Ngày: </strong>{{ post.date }}</p>
    <div v-if="user" class="mt-4">
      <h4>Thêm bình luận</h4>
      <textarea
        v-model="newComment"
        class="form-control mb-3"
        rows="3"
        placeholder="Viết bình luận..."
      ></textarea>
      <button @click="addComment" class="btn btn-primary">Gửi</button>
    </div>
    <div v-else class="mt-3">
      <p class="text-danger">Vui lòng đăng nhập để bình luận.</p>
    </div>
    <div v-if="post.comments && post.comments.length" class="mt-4">
      <h4>Bình luận:</h4>
      <ul>
        <li v-for="(comment, index) in post.comments" :key="index" class="mb-3">
          <strong>{{ comment.userName }}</strong> - {{ comment.time }}
          <p>{{ comment.content }}</p>
        </li>
      </ul>
    </div>
    <div class="actions">
      <button @click="goBack" class="btn btn-secondary">Quay lại</button>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('currentUser')),
      post: {},
      newComment: '', // Khởi tạo giá trị mặc định
    }
  },
  created() {
    const postIndex = this.$route.params.index
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
    this.post = posts[postIndex] || {} // Lấy bài viết theo index từ localStorage
  },
  methods: {
    goBack() {
      this.$router.push('/') // Quay lại trang danh sách bài viết
    },
    addComment() {
      if (!this.newComment.trim()) return // Kiểm tra nội dung bình luận

      const comment = {
        userName: this.user.fullname, // Hiển thị tên người dùng
        content: this.newComment.trim(),
        time: new Date().toLocaleString(), // Hiển thị thời gian hiện tại
      }

      // Thêm bình luận vào bài viết
      this.post.comments = this.post.comments || []
      this.post.comments.push(comment)

      // Cập nhật localStorage
      const posts = JSON.parse(localStorage.getItem('posts') || '[]')
      const postIndex = this.$route.params.index
      posts[postIndex] = this.post // Cập nhật bài viết đã chỉnh sửa
      localStorage.setItem('posts', JSON.stringify(posts))

      // Reset ô nhập bình luận
      this.newComment = ''
    },
  },
}
</script>

<style scoped>
/* Thêm phong cách cho trang chi tiết bài viết */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.post-category {
  font-size: 18px;
  color: #6c757d;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.actions {
  margin-top: 20px;
}
</style>
