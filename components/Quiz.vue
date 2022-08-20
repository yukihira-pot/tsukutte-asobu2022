<template>
  <div class="quiz-container">
    <div class="quiz">{{ quizzes[quizIndex].question }}</div>
    <textarea v-model="yourAnswer" class="answer" />
    <button @click="SendAnswer">回答</button>
  </div>
</template>

<script>
import Vue from 'vue'

const quizzes = [
  {
    question: '1から1000までの素数の個数はいくつや？',
    answer: '168',
  },
  {
    question: '78133×82199は？',
    answer: '6422454467',
  },
  {
    question:
      '1359 + 837 + 182 + 2 + 10 + 5937 + 1289 + 188 + 2859 + 234125 + 53289 + 461 + 123 + 12389 + 5289 + 1325789 + 3258 + 1 + 28 + 506 + 18 + 59 + 18は？',
    answer: '1648016',
  },
]

export default Vue.extend({
  name: 'Quiz',
  data() {
    return {
      yourAnswer: '',
      quizzes,
      quizIndex: 0,
    }
  },
  mounted() {
    this.quizIndex = Math.floor(Math.random() * quizzes.length)
  },
  methods: {
    SendAnswer() {
      if (this.yourAnswer === quizzes[this.quizIndex].answer) {
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
  user-select: none;
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
