<template>
  <div class="hanseibun-container">
    <div class="otehon">
      <img
        src="https://github.com/yukihira-pot/tsukutte-asobu2022/blob/main/static/hanseibun.png?raw=true"
      />
    </div>
    <textarea v-model="hanseibun" class="teishutubun" />
    <button class="submit-btn" @click="submitHanseibun">提出</button>
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
  position: absolute;
  width: 100%;
  height: 78%;
  display: flex;
  z-index: 200;
  padding-top: 3rem;
}

.otehon {
  width: 40%;
  background: white;
  margin: 0 5%;
  padding: 2vw;
  border: 0.1vw solid black;
  border-radius: 0.8vw;
  border-radius: 1em;
}

.otehon > img {
  width: 95%;
  height: 95%;
}

.teishutubun {
  width: 40%;
  padding: 1em;
  border: 0.1vw solid black;
  border-radius: 0.8vw;
  resize: none;
}

.submit-btn {
  position: absolute;
  top: 80%;
  left: 80%;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  font-size: 2vw;
  cursor: pointer;
}

.submit-btn:hover {
  background: yellow;
}
</style>
