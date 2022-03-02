<template>
  <div class="home">
      <div class="text">
        <p>スケートボード</p>
      </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped lang="scss">
.home{
  background-image: url("../assets/img/hero-index1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 42rem;
  display: flex;
  justify-content: flex-end;
  margin: 5rem 5rem;
}
.text{ 
  width: min-content;
  // width: -moz-min-content;
  // width: -webkit-min-content;
  p{
    font-size: 3.6rem;
    margin-right: 3rem;
    margin-top: 3.3rem;
    font-weight: 700;
  }
  
   


}
</style>
