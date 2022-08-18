<template>
  <div>
    <div>
      <img src="/neko.png" alt="" class="neko-img" />
    </div>
    <div>{{ scripts[scriptIndex] }}</div>
    <button @click="proceedScript">NEXT</button>
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
    }
  },
  methods: {
    proceedScript() {
      this.scriptIndex += 1
      if (scripts.length <= this.scriptIndex) {
        window.alert('finish')
      }
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
