<template>
  <body>
    <header>ヘッダー</header>
    <div id="container">
      <div class="main-container">
        <NekoPageMain />
      </div>
      <div class="neko-speech-container">
        <NekoPageSpeech />
      </div>
      <div>
        <div>{{ scripts[scriptIndex] }}</div>
        <button @click="proceedScript">NEXT</button>
        <textarea v-model="hanseibun" />
        <button @click="submitHanseibun">提出</button>
        <textarea v-model="yourAnswer" />
        <button @click="GiveQuestion">問題</button>
        <button @click="SendAnswer">解答</button>
      </div>
    </div>
  </body>
</template>

<script>
import Vue from 'vue'
import NekoPageMain from '../components/NekoPageMain.vue'
import NekoPageSpeech from '../components/NekoPageSpeech.vue'
const scripts = ['hello', 'world', 'goodnight']

export default Vue.extend({
  name: 'IndexPage',
  components: {
    NekoPageMain,
    NekoPageSpeech,
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
  height: max-content;
  margin: 10px auto;
}

.neko-speech-container {
  background-color: rgb(200 200 200);
  padding: 1em;
  border-radius: 10px;
}
</style>
