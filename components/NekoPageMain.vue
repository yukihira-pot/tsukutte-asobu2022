<template>
  <div id="neko-page-main-container">
    <div class="img-container">
      <img src="/neko.png" alt="" class="neko-img" />
    </div>
    <div class="feed-btn-container">
      <button class="feed-btn">餌やり<br />ボタン</button>
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
  position: relative;
  height: 50vw;
  top: 50px;
  left: 10vw;
  z-index: 10;
}

.feed-btn-container {
  display: inline-block;
  width: 18%;
}

.feed-btn-container .feed-btn {
  position: relative;
  width: 12vw;
  height: 12vw;
  border: 0.5vw solid rgb(33 33 33);
  border-radius: 50%;
  background-color: rgb(252 243 0);
  font-size: 2vw;
  font-weight: bold;
  cursor: pointer;
}

.feed-btn-container .feed-btn:hover {
  background-color: white;
}
</style>
