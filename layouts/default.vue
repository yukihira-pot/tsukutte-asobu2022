<template>
  <div>
    <div v-if="!start" class="start-page">
      <img src="/kawaiineko.png" />
      <div class="right-side">
        <div class="description">可愛らしい猫で日頃の疲れを癒しませんか？</div>
        <button class="start-button" @click="start = true">はじめる</button>
        <p class="attention">画像はイメージです</p>
      </div>
    </div>
    <Nuxt v-else />
  </div>
</template>
<script>
export default {
  data() {
    return {
      start: false,
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css',
      },
    ],
  },
}
</script>

<style scoped>
.start-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('../static/start-haikei.JPG');
  background-size: cover;
  display: flex;
  padding: 30px;
  align-items: center;
}

img {
  width: 50%;
  height: 40vw;
}

.description {
  font-family: serif;
  font-size: 200%;
  margin-bottom: 10%;
  color: #6f4b3e;
}

.right-side {
  width: 50%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.start-button {
  background-color: palevioletred;
  font-size: 200%;
  border: none;
  cursor: pointer;
  outline: 3px solid white;
  padding: 10px 30px;
  appearance: none;
  border-radius: 30px;
  color: white;
}

.start-button:hover {
  background-color: pink;
}

.attention {
  position: fixed;
  bottom: 0;
  right: 0;
  color: gray;
  font-size: 30%;
}
</style>
