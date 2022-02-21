<template>
  <header>
    <router-link to="/">
     <img src="@/assets/logo.svg" alt="sinus logo">
    </router-link>
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
    background: url("../assets/img/header-index.jpg"), rgba(255,255,255, 0.5);
    background-repeat: no-repeat;
    background-position-y: 57%;
    background-size: 100%;
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