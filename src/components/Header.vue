<template>
  <header>
    <img src="@/assets/logo.svg" alt="sinus logo">
    <div>
      <h1>SINUS</h1>
      <p>SKATEBOARDS スケートボード</p>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  header {
    display: flex;
    height: 6rem;
    align-items: center;
    background: url("../assets/skate-background.jpg"), rgba(255,255,255, 0.5);
    padding: 1.5rem;
  }
  div {
    margin-left: 1.5rem;
  }
  img {
    height: 6rem;
    width: 6rem;
  }
</style>