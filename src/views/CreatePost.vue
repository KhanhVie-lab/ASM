<template>
  <br /><br />
  <br />
  <div class="container">
    <h2>Quản Lý Bài Viết</h2>

    <!-- Danh sách bài viết -->
    <div class="mb-4">
      <h3>Danh Sách Bài Viết</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tiêu Đề</th>
            <th scope="col">Danh Mục</th>
            <th scope="col">Tác Giả</th>
            <th scope="col">Ngày</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <!-- Lọc bài viết theo người dùng hiện tại -->
          <tr v-for="(post, index) in userPosts" :key="index">
            <td>{{ post.title }}</td>
            <td>{{ post.category }}</td>
            <td>{{ post.author }}</td>
            <td>{{ post.date }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editPost(post, index)">Sửa</button> |
              <button class="btn btn-danger btn-sm" @click="deletePost(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Thêm/Sửa bài viết -->
    <div class="card p-3">
      <h3>{{ isEditMode ? 'Sửa Bài Viết' : 'Thêm Bài Viết' }}</h3>
      <form @submit.prevent="isEditMode ? updatePost() : addPost()">
        <div class="mb-3">
          <label for="title" class="form-label">Tiêu Đề</label>
          <input type="text" class="form-control" v-model="currentPost.title" id="title" required />
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">Danh Mục</label>
          <input
            type="text"
            class="form-control"
            v-model="currentPost.category"
            id="category"
            required
          />
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Tác giả</label>
          <input
            type="text"
            class="form-control"
            v-model="currentPost.author"
            id="author"
            disabled
          />
        </div>
        <div class="mb-3">
          <label for="imageUrl" class="form-label">URL Ảnh</label>
          <input
            type="url"
            class="form-control"
            v-model="currentPost.imageUrl"
            id="imageUrl"
            required
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Nội Dung</label>
          <textarea
            class="form-control"
            v-model="currentPost.content"
            id="content"
            rows="4"
            required
          ></textarea>
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
      posts: JSON.parse(localStorage.getItem('posts') || '[]'), // Lấy danh sách bài viết từ localStorage
      currentPost: {
        title: '',
        category: '',
        imageUrl: '',
        content: '',
        author: '', // Tác giả sẽ lấy từ currentUser.fullname
        date: new Date().toLocaleDateString(),
      },
      isEditMode: false, // Biến điều khiển chế độ chỉnh sửa
      editIndex: null, // Chỉ số bài viết đang sửa
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || { fullname: 'Anonymous' }, // Lấy thông tin người dùng hiện tại
    }
  },
  computed: {
    // Lọc bài viết theo tác giả là người dùng hiện tại
    userPosts() {
      return this.posts.filter((post) => post.author === this.currentUser.fullname)
    },
  },
  methods: {
    // Thêm bài viết mới
    addPost() {
      this.currentPost.author = this.currentUser.fullname // Đảm bảo rằng tác giả là người dùng hiện tại
      this.posts.push({
        title: this.currentPost.title,
        category: this.currentPost.category,
        imageUrl: this.currentPost.imageUrl,
        content: this.currentPost.content,
        date: this.currentPost.date,
        author: this.currentPost.author,
      })

      this.updateLocalStorage()
      this.resetForm()

      // Hiển thị thông báo thêm thành công
      Swal.fire({
        icon: 'success',
        title: 'Thêm bài viết thành công!',
        text: 'Bài viết đã được thêm vào danh sách.',
      })
    },

    // Cập nhật bài viết
    updatePost() {
      this.posts[this.editIndex] = {
        title: this.currentPost.title,
        category: this.currentPost.category,
        imageUrl: this.currentPost.imageUrl,
        content: this.currentPost.content,
        date: this.currentPost.date,
        author: this.currentPost.author,
      }

      this.updateLocalStorage()
      this.resetForm()

      // Hiển thị thông báo cập nhật thành công
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật bài viết thành công!',
        text: 'Bài viết đã được cập nhật.',
      })
    },

    // Xóa bài viết
    deletePost(index) {
      Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa bài viết này?',
        text: 'Bài viết này sẽ không thể khôi phục lại.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
      }).then((result) => {
        if (result.isConfirmed) {
          this.posts.splice(index, 1)
          this.updateLocalStorage()

          // Hiển thị thông báo xóa thành công
          Swal.fire({
            icon: 'success',
            title: 'Xóa bài viết thành công!',
            text: 'Bài viết đã được xóa.',
          })
        }
      })
    },

    // Cập nhật dữ liệu vào localStorage
    updateLocalStorage() {
      localStorage.setItem('posts', JSON.stringify(this.posts))
    },

    // Đặt lại form
    resetForm() {
      this.currentPost = {
        title: '',
        category: '',
        imageUrl: '',
        content: '',
        author: this.currentUser.fullname, // Đảm bảo trường tác giả luôn đúng
        date: new Date().toLocaleDateString(),
      }
      this.isEditMode = false
      this.editIndex = null
    },

    // Chỉnh sửa bài viết
    editPost(post, index) {
      this.currentPost = { ...post }
      this.isEditMode = true
      this.editIndex = index
    },
  },
  mounted() {
    // Đảm bảo rằng tác giả trong form là người dùng hiện tại
    this.currentPost.author = this.currentUser.fullname
  },
}
</script>
