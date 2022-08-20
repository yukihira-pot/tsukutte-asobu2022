<template>
  <div class="neko-page-speech-container">
    <div class="hukidashi" @click="proceedScript">
      <div class="neko-name">猫八さん</div>
      <div class="speech-box">
        <p class="neko-speech">
          {{ scripts[scriptIndex] }}
        </p>
        <button class="next-button">NEXT</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
const normalText = [
  '何やお前',
  '勝手に触んなや',
  'まあゆっくりしてけや。この猫八さまに謁見できるんやからな',
]
const hanseibunText = [
  'お前、飯持ってくるのサボったやろ',
  'あとちょっとで死ぬところやったでほんま',
  'あー、傷ついた。めっちゃ傷ついたわ。どないしてくれるねん',
  'ごめんで済んだら警察いらんねん',
  '謝罪文書いてもらうわ',
  '１文字でも間違えたら許さへんで',
]
const endHanseibunText = ['うわー！こいつほんまに書きよった！おもろ！']
const feedText = [
  'まっず',
  'お、飯来たわ。この猫八さまに給仕させて頂けること、光栄に思いや',
  'やっとかいな。結構待ったでぇ。ちゃんと用意したみたいやし、許したるわ ',
  'ちょい遅いんちゃうか。猫八さまは忙しいんやし、あんま怒らせなや',
  '飯や飯！あ、もう帰ってええで',
]
const endBlueScreenText = [
  'ビビったやろ',
  'お前が飯持ってこーへんからブルスクにしてやったわ',
]
const quizText = [
  'おい！飯は？',
  '全くこれだから最近の若造は...',
  'まあこの問題解けたら許したるわ',
]
const endQuizText = ['え？解けたん？', 'おもんな']

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
      currentScript: '',
    }
  },
  watch: {
    mode() {
      if (this.mode !== 'doAngry') {
        this.scriptIndex = 0
      }
      if (this.mode === 'startAngry') {
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            this.scripts = hanseibunText
            this.$emit('change-angry-mode', 'hanseibun')
            break
          case 1:
            this.$emit('change-mode', 'doAngry')
            this.$emit('change-angry-mode', 'bluescreen')
            break
          case 2:
            this.scripts = quizText
            this.$emit('change-angry-mode', 'quiz')
        }
      }
      if (this.mode === 'endAngry') {
        if (this.angryMode === 'hanseibun') {
          this.scripts = endHanseibunText
        }
        if (this.angryMode === 'bluescreen') {
          this.scripts = endBlueScreenText
        }
        if (this.angryMode === 'quiz') {
          this.scripts = endQuizText
        }
      }
      if (this.mode === 'normal') {
        this.scripts = normalText
      }
      if (this.mode === 'feed') {
        this.scripts = []
        this.scripts.push(feedText[Math.floor(Math.random() * feedText.length)])
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
        if (this.mode === 'doAngry') {
          this.scriptIndex = this.scripts.length - 1
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

.neko-name {
  font-size: 1.4vw;
  font-weight: 700;
  color: rgb(79 79 79);
}

.neko-speech {
  font-size: 2vw;
  font-family: 'Source Sans Pro', 'ヒラギノ角ゴシック Pro',
    'Hiragino Kaku Gothic Pro', sans-serif;
  font-weight: 700;
  color: rgb(79 79 79);
}

.hukidashi {
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: 100;
  background: linear-gradient(
    transparent,
    rgb(240 240 240 / 85%) 5%,
    rgb(240 240 240 / 85%) 100%
  );
  padding: 4vw;
  border-radius: 4px;
  cursor: pointer;
  transform: translateY(10px);
  min-height: 4vh;
}

.speech-box {
  display: flex;
  justify-content: space-between;
}

.next-button {
  background: none;
  font-size: 1.4vw;
  font-weight: 700;
  color: rgb(79 79 79);
  border: none;
  cursor: pointer;
}
</style>
