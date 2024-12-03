<template>
  <br />
  <br />
  <br />
  <div class="container">
    <h2>Blog</h2>
    <p>Danh sách blog</p>

    <div class="row">
      <div class="col-md-4" v-for="(post, index) in posts" :key="index">
        <article>
          <div class="post-img">
            <img :src="post.imageUrl" alt="Post Image" class="img-fluid" />
          </div>
          <p class="post-category">{{ post.category }}</p>
          <h3 class="title">
            <a
              ><router-link :to="'/post/' + index">{{ post.title }}</router-link></a
            >
            <br />
            <button class="btn btn-outline-primary">Like</button> |
            <button class="btn btn-outline-success">Share</button>
          </h3>
          <div class="d-flex align-items-center">
            <div class="post-meta">
              <p class="post-author">{{ post.author }}</p>
              <p class="post-date">
                <time>{{ post.date }}</time>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
export default {
  data() {
    return {
      posts: JSON.parse(localStorage.getItem('posts') || '[]'), // Lấy danh sách bài viết từ localStorage
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.post-img img {
  width: 500px;
  height: 200px;
  border-radius: 8px;
}

.post-category {
  font-size: 14px;
  color: #6c757d;
}

.title a {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.title a:hover {
  color: #007bff;
  text-decoration: underline;
}

.post-meta p {
  margin: 0;
  font-size: 14px;
  color: #6c757d;
}

.post-date time {
  color: #888;
}
</style>
