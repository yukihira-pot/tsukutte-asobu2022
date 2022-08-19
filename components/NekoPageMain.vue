<template>
  <div>
    <div class="img-container">
      <img src="/neko.png" alt="" class="neko-img" />
    </div>
    <div class="feed-btn-container">
      <button class="feed-btn">餌やりボタン</button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.img-container {
  display: inline-block;
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
}

.img-container .neko-img {
  width: 70%;
}

.feed-btn-container {
  display: inline-block;
  width: 15%;
}

.feed-btn-container .feed-btn {
  width: 5em;
  height: 5em;
  border: 0;
  padding: 1em;
  border-radius: 50%;
  background-color: rgb(200 200 200);
  font-size: 1.2em;
  font-weight: bold;
}
</style>
