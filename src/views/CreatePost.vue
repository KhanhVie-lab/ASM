<template>
    <section id="create-post" class="create-post section">
      <div class="container section-title">
        <br> <br>
        <h2>Create a New Post</h2>
        <p>Write and publish your blog post</p>
      </div>
  
      <div class="col-lg-12 col-md-12 col-sm-12">
        <form @submit.prevent="submitPost">
          <!-- Tiêu đề -->
          <div class="form-group">
            <label for="title">Tiêu Đề</label>
            <input 
              type="text" 
              id="title" 
              v-model="title" 
              class="form-control" 
              placeholder="Nhập tiêu đề bài viết" 
              required 
            />
          </div>
  
          <!-- Nội dung -->
          <div class="form-group">
            <label for="content">Nội Dung</label>
            <textarea 
              id="content" 
              v-model="content" 
              class="form-control" 
              rows="6" 
              placeholder="Viết nội dung bài viết" 
              required
            ></textarea>
          </div>
  
          <!-- Tải lên hình ảnh -->
          <div class="form-group">
            <label for="image">Tải Lên Hình Ảnh</label>
            <input 
              type="file" 
              id="image" 
              @change="handleImageUpload" 
              class="form-control" 
              accept="image/*" 
            />
          </div>
  
          <!-- Nút gửi -->
          <button type="submit" class="btn btn-primary">Đăng Bài</button>
        </form>
      </div>
    </section>
    <br>
    <br>
    <br>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "",
        content: "",
        image: null,
      };
    },
    methods: {
      handleImageUpload(event) {
        this.image = event.target.files[0];
      },
      submitPost() {
        // Example form submission logic
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("content", this.content);
        if (this.image) {
          formData.append("image", this.image);
        }
  
        // You can send this formData to your backend API (for example)
        console.log("Post data submitted:", formData);
        alert("Bài viết đã được đăng thành công!");
        
        // Reset form
        this.title = "";
        this.content = "";
        this.image = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Định dạng chung cho phần đăng bài */
  .create-post {
    padding: 30px 0;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical;
  }
  
  input[type="file"] {
    padding: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  