<template>
  <div id="container">
    <BlueScreen
      v-if="mode == 'doAngry' && angryMode == 'bluescreen'"
      @change-mode="changeMode"
    />
    <div v-if="mode != 'doAngry' || angryMode != 'bluescreen'">
      <Hanseibun
        v-if="mode == 'doAngry' && angryMode == 'hanseibun'"
        :mode="mode"
        @change-mode="changeMode"
      />
      <Quiz
        v-if="mode == 'doAngry' && angryMode == 'quiz'"
        @change-mode="changeMode"
      />
      <NekoPageMain :mode="mode" />
      <div v-if="mode == 'normal'" class="feed-btn-container">
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
    </div>
    <!--後で消す-->
    <!-- {{ time }}
    {{ mode }}
    {{ angryMode }} -->
  </div>
</template>

<script>
import Vue from 'vue'
import NekoPageMain from '../components/NekoPageMain.vue'
import NekoPageSpeech from '../components/NekoPageSpeech.vue'
import Hanseibun from '../components/Hanseibun.vue'
import BlueScreen from '@/components/BlueScreen.vue'
import Quiz from '@/components/Quiz'
const scripts = ['hello', 'world', 'goodnight']

export default Vue.extend({
  name: 'IndexPage',
  components: {
    NekoPageMain,
    NekoPageSpeech,
    Hanseibun,
    BlueScreen,
    Quiz,
  },
  data() {
    return {
      scripts,
      scriptIndex: 0,
      mode: 'normal',
      time: 0,
      timer: null,
      angryMode: '',
    }
  },
  watch: {
    time() {
      if (this.time === 30) {
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
