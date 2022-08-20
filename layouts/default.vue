<template>
  <div>
    <div v-if="!start" class="start-page">
      <img src="/startgamen.png" />
      <button class="start-button" @click="start = true">はじめる</button>
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
}

.start-button {
  position: fixed;
  right: 5%;
  bottom: 5%;
  background-color: palevioletred;
  border: none;
  cursor: pointer;
  outline: 3px solid white;
  padding: 10px 30px;
  appearance: none;
  font-size: 48px;
  border-radius: 30px;
  color: white;
}

.start-button:hover {
  background-color: pink;
}
</style>
