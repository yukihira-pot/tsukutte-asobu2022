<template>
  <div class="quiz-container">
    <div class="quiz">ここに問題を書きます</div>
    <textarea v-model="yourAnswer" class="answer" />
    <button @click="SendAnswer">回答</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Quiz',
  data() {
    return {
      yourAnswer: '',
    }
  },
  methods: {
    SendAnswer() {
      const QuestionAnswer = '答え'
      if (this.yourAnswer === QuestionAnswer) {
        window.alert('正解や')
        this.$emit('change-mode', 'endAngry')
      } else {
        window.alert('ちゃうわ！')
      }
      this.yourAnswer = ''
    },
  },
})
</script>

<style scoped>
.quiz-container {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 300;
  width: 100%;
  height: 75%;
  padding-top: 3rem;
  align-items: flex-end;
}

.quiz {
  background: white;
  margin-right: 3%;
  width: 40%;
  height: 100%;
  padding: 1rem;
  border: 0.1vw solid black;
  border-radius: 0.8vw;
}

.answer {
  margin-right: 3%;
  width: 40%;
  height: 100%;
  padding: 1rem;
  border: 0.1vw solid black;
  border-radius: 0.8vw;
}

button {
  position: absolute;
  top: 80%;
  left: 80%;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  font-size: 2vw;
  cursor: pointer;
}

button:hover {
  background: yellow;
}
</style>
