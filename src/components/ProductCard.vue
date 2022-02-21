<template>
  <article class="product">
    <img class="product-image" src="" alt="product">
    <h2 class="product-title">Title</h2>
    <p class="product-price">Price</p>
  </article>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .product{
    padding: 2rem;
    background-color: #F9F7F7;
    max-width: 10rem;
    display: grid;
    height: 15rem;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows:5fr repeat(2, 1fr);
    grid-template-areas: 
    "image"
    "title"
    "price";
    ;
  }
  .product-image{
    grid-area: image;
  }
  .product-title{
    grid-area: title;
  }
  .product-price{
    grid-area: price;
  }
</style>