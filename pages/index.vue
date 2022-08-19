<template>
  <div>
    <div>
      <img src="/neko.png" alt="" class="neko-img" />
    </div>
    <div>{{ scripts[scriptIndex] }}</div>
    <button @click="proceedScript">NEXT</button>
    <textarea v-model="hanseibun" />
    <button @click="submitHanseibun">提出</button>
  </div>
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
.neko-img {
  width: 300px;
  height: 300px;
}
</style>
