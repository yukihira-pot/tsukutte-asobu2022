<template>
  <body>
    <header>ヘッダー</header>
    <div id="container">
      <div class="main-container">
        <div class="img-container">
          <img src="/neko.png" alt="" class="neko-img" />
        </div>
        <div class="feed-btn-container">
          <button class="feed-btn">餌やりボタン</button>
        </div>
      </div>

      <div class="neko-speech-container">
        <div class="neko-name">猫</div>
        <p class="neko-speech">なんやおまえ</p>
      </div>
      <div>
        <div>{{ scripts[scriptIndex] }}</div>
        <button @click="proceedScript">NEXT</button>
        <textarea v-model="hanseibun" />
        <button @click="submitHanseibun">提出</button>
      </div>
    </div>
  </body>
</template>

<script>
import Vue from 'vue'
const scripts = ['hello', 'world', 'goodnight']

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      scripts,
      scriptIndex: 0,
      hanseibun: '',
    }
  },
  methods: {
    proceedScript() {
      this.scriptIndex += 1
      if (scripts.length <= this.scriptIndex) {
        window.alert('finish')
      }
    },
    submitHanseibun() {
      const answer = 'あいうえお'
      if (this.hanseibun === answer) {
        window.alert('正解!')
      } else {
        window.alert('不正解')
      }
      this.hanseibun = ''
    },
  },
})
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 10px auto;
}

header {
  background-color: rgb(191 191 191);
  height: 2em;
}

.main-container {
  margin-top: 10px;
  margin-bottom: 10px;
}

.img-container {
  display: inline-block;
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
}

.img-container .neko-img {
  width: 70%;
}

.feed-btn-container {
  display: inline-block;
  width: 15%;
}

.feed-btn-container .feed-btn {
  width: 5em;
  height: 5em;
  border: 0;
  padding: 1em;
  border-radius: 50%;
  background-color: rgb(200 200 200);
  font-size: 1.2em;
  font-weight: bold;
}

.neko-speech-container {
  background-color: rgb(200 200 200);
  padding: 1em;
  border-radius: 10px;
}
</style>
