<template>
  <div class="neko-page-speech-container">
    <div class="hukidashi" @click="proceedScript">
      <div class="neko-name">猫八さん</div>
      <p class="neko-speech">{{ scripts[scriptIndex] }}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
const normalText = ['何やお前', '勝手に触んなや']
const hanseibunText = [
  'お前、飯持ってくるのサボったやろ',
  'あとちょっとで死ぬところやったでほんま',
  'あー、傷ついた。めっちゃ傷ついたわ。どないしてくれるねん',
  'ごめんで済んだら警察いらんねん',
  '謝罪文書いてもらうわ',
  '１文字でも間違えたら許さへんで',
]
const endHanseibunText = ['うわー！こいつほんまに書きよった！おもろ！']
const feedText = ['まっず']
const endBlueScreenText = [
  'ビビったやろ',
  'お前が飯持ってこーへんからブルスクにしてやったわ',
]

export default Vue.extend({
  name: 'NekoPageSpeech',
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
    angryMode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      scripts: normalText,
      scriptIndex: 0,
    }
  },
  watch: {
    mode() {
      this.scriptIndex = 0
      if (this.mode === 'startAngry') {
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            this.scripts = hanseibunText
            this.$emit('change-angry-mode', 'hanseibun')
            break
          case 1:
            this.$emit('change-mode', 'doAngry')
            this.$emit('change-angry-mode', 'bluescreen')
            break
        }
      }
      if (this.mode === 'endAngry') {
        if (this.angryMode === 'hanseibun') {
          this.scripts = endHanseibunText
        }
        if (this.angryMode === 'bluescreen') {
          this.scripts = endBlueScreenText
        }
      }
      if (this.mode === 'normal') {
        this.scripts = normalText
      }
      if (this.mode === 'feed') {
        this.scripts = feedText
      }
    },
  },
  methods: {
    proceedScript() {
      this.scriptIndex += 1
      if (this.scripts.length <= this.scriptIndex) {
        if (this.mode === 'startAngry') {
          this.scriptIndex = this.scripts.length - 1
          this.$emit('change-mode', 'doAngry')
        }
        if (this.mode === 'endAngry') {
          this.$emit('change-mode', 'normal')
          this.$emit('change-angry-mode', '')
        }
        if (this.mode === 'feed') {
          this.$emit('change-mode', 'normal')
        }
        if (this.mode === 'normal') {
          this.scriptIndex = 0
        }
      }
    },
  },
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
  z-index: 100;
  background-color: rgb(240 240 240 / 85%);
  padding: 1em;
  border-radius: 10px;
  cursor: pointer;
}
</style>
