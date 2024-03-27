<template>
  <router-link to="/home">三维城景</router-link>|
  <router-link to="/blog">路线规划</router-link>
  <div class="marquee-container">
      <div class="marquee-text">欢迎使用淄博文旅导航页面</div>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.marquee-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  overflow: hidden; /* 确保超出的文本不会显示 */
  z-index: 1000; /* 确保滚动字幕在其他内容之上 */
  background-color: #f0f0f0; /* 背景颜色，可根据需要调整 */
}

.marquee-text {
  display: block;
  width: 75%;
  white-space: nowrap; /* 防止文本换行 */
  /* 动画持续时间和速度 */
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(100%); /* 从右侧开始 */
  }
  to {
    transform: translateX(-100%); /* 向左移动到完全消失在视口外 */
  }
}
</style>
