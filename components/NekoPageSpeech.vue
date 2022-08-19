<template>
  <div class="neko-page-speech-container">
    <div class="hukidashi">
      <div class="neko-name">猫八さん</div>
      <p class="neko-speech">なんやおまえ</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'NekoPageSpeech',
})
</script>

<style scoped>
.neko-page-speech-container {
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
}

.neko-name,
.neko-speech {
  font-size: 2vw;
  font-family: 'Source Sans Pro', 'ヒラギノ角ゴシック Pro',
    'Hiragino Kaku Gothic Pro', sans-serif;
}

.hukidashi {
  width: 90%;
  bottom: 10px;
  margin: 10px auto;
  z-index: 99999;
  background-color: rgb(240 240 240 / 85%);
  padding: 1em;
  border-radius: 10px;
}
</style>
