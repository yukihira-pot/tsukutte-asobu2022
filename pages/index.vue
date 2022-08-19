<template>
  <div id="container">
    <header>ヘッダー</header>
    <NekoPageMain />
    <div class="feed-btn-container">
      <button class="feed-btn">餌やり<br />ボタン</button>
    </div>
    <NekoPageSpeech />
  </div>
  <!-- <div>
        <div>{{ scripts[scriptIndex] }}</div>
        <button @click="proceedScript">NEXT</button>
        <textarea v-model="hanseibun" />
        <button @click="submitHanseibun">提出</button>
        <textarea v-model="yourAnswer" />
        <button @click="GiveQuestion">問題</button>
        <button @click="SendAnswer">解答</button>
      </div> -->
</template>

<script>
import Vue from 'vue'
import NekoPageMain from '../components/NekoPageMain.vue'
import NekoPageSpeech from '../components/NekoPageSpeech.vue'
// import BlueScreen from '@/components/BlueScreen.vue'
const scripts = ['hello', 'world', 'goodnight']

export default Vue.extend({
  name: 'IndexPage',
  components: {
    NekoPageMain,
    NekoPageSpeech,
    // BlueScreen,
  },
  data() {
    return {
      scripts,
      scriptIndex: 0,
      hanseibun: '',
      yourAnswer: '',
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
    GiveQuestion() {
      window.alert('問題出題')
    },
    SendAnswer() {
      const QuestionAnswer = '答え'
      if (this.yourAnswer === QuestionAnswer) {
        window.alert('正解!')
      } else {
        window.alert('不正解')
      }
      this.yourAnswer = ''
    },
  },
})
</script>

<style>
header {
  position: fixed;
  background-color: rgb(191 191 191);
  height: 2em;
  width: 100vw;
}

#container {
  position: relative;
  background: url('../static/neko_room.png');
  background-size: cover;
  padding-bottom: 30px;
}

.feed-btn-container {
  position: absolute;
  top: 50%;
  right: 5%;
  width: 12vw;
  height: 12vw;
}

.feed-btn-container .feed-btn {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0.5vw solid rgb(33 33 33);
  border-radius: 50%;
  background-color: rgb(252 243 0);
  font-size: 2vw;
  font-weight: bold;
  cursor: pointer;
}

.feed-btn-container .feed-btn:hover {
  background-color: white;
}
</style>
