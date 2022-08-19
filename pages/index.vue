<template>
  <div id="container">
    <header>ヘッダー</header>
    <Hanseibun
      v-if="mode == 'doAngry' && angryMode == 'hanseibun'"
      :mode="mode"
      @change-mode="changeMode"
    />
    <NekoPageMain :mode="mode" />
    <div v-if="angryMode == ''" class="feed-btn-container">
      <button class="feed-btn" @click="mode = 'feed'">
        餌やり<br />ボタン
      </button>
    </div>
    <NekoPageSpeech
      :mode="mode"
      :angry-mode="angryMode"
      @change-angry-mode="changeAngryMode"
      @change-mode="changeMode"
    />
    <!--後で消す-->
    {{ time }}
    {{ mode }}
    {{ angryMode }}
  </div>
  <!-- <div>
        <div>{{ scripts[scriptIndex] }}</div>
        <button @click="proceedScript">NEXT</button>
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
import Hanseibun from '../components/Hanseibun.vue'
// import BlueScreen from '@/components/BlueScreen.vue'
const scripts = ['hello', 'world', 'goodnight']

export default Vue.extend({
  name: 'IndexPage',
  components: {
    NekoPageMain,
    NekoPageSpeech,
    Hanseibun,
    // BlueScreen,
  },
  data() {
    return {
      scripts,
      scriptIndex: 0,
      yourAnswer: '',
      mode: 'normal',
      time: 0,
      timer: null,
      angryMode: '',
    }
  },
  watch: {
    time() {
      if (this.time === 200) {
        this.mode = 'startAngry'
      }
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time++
    }, 1000)
  },
  methods: {
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
    changeAngryMode(m) {
      this.angryMode = m
    },
    changeMode(m) {
      this.mode = m
      if (m === 'normal') {
        this.time = 0
      }
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
