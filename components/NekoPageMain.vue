<template>
  <div class="img-container">
    <img :src="nekoImage" alt="" class="neko-img" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'NekoPageMain',
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    nekoImage() {
      if (this.mode === 'angry') {
        return '/gorogoroneko.png'
      }
      return '/neko.png'
    },
  },
})
</script>

<style scoped>
.img-container {
  width: 100%;
  text-align: center;
  padding-top: 4rem;
}

.img-container .neko-img {
  margin: auto;
  height: 50vw;
  z-index: 10;
}
</style>
