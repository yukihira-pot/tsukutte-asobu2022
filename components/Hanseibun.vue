<template>
  <div class="hanseibun-container">
    <div class="otehon">
      <img
        src="https://github.com/yukihira-pot/tsukutte-asobu2022/blob/main/static/hanseibun.png?raw=true"
      />
    </div>
    <textarea v-model="hanseibun" />
    <button @click="submitHanseibun">提出</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Hanseibun',
  props: {
    angryMode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hanseibun: '',
    }
  },
  methods: {
    submitHanseibun() {
      const answer = 'あいうえお'
      if (this.hanseibun === answer) {
        window.alert('よろしい')
        this.$emit('change-mode', 'endAngry')
      } else {
        window.alert('猫八さん「間違ってる。やり直しや」')
      }
      this.hanseibun = ''
    },
  },
})
</script>

<style scoped>
.hanseibun-container {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 200;
  padding-top: 4rem;
}

.otehon {
  width: 40%;
  background: white;
}

.otehon > img {
  width: 100%;
}
</style>
