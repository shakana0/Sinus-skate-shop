<template>
  <article class="product">
    <img class="product-image" :src="'http://localhost:5000/images/' + product.imgFile" width="70px" alt="product">
    <p class="product-title">{{product.title}}</p>
    <p class="product-price">£{{product.price}}</p>
  </article>
</template>

<script>
// import ProductModal from '@/components/ProductModal.vue'
export default {
  props:['product'],
  // components:{ProductModal}

}
</script>

<style scoped lang="scss">
  .product{
    padding: 2rem;
    background-color: #F9F7F7;
    max-width: 10rem;
    display: grid;
    // height: 15rem;
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