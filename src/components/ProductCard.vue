<template>
  <article class="product" @click="$emit('sendCurrentProduct', product)">
    <!-- $TIPS: Move 'http://localhost:5000' to an environment variable-->
    <img
      class="product-image"
      :class="product.category"
      :src="'http://localhost:5000/images/' + product.imgFile"
      alt="product"
    />
    <p class="product-title" :class="product.category">{{ product.title }}</p>
    <p class="product-price">£{{ product.price }}</p>
  </article>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped lang="scss">
.product {
  padding: 2rem 2rem;
  background-color: #f9f7f7;
  min-width: 10rem;
  height: 20rem;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr repeat(2, 1fr);
  grid-template-areas:
    "image"
    "title"
    "price";
}
.product-image {
  grid-area: image;
}
.product-title {
  grid-area: title;
  font-weight: 700;
}
.product-price {
  grid-area: price;
}
.skateboard {
  max-width: 70px;
}
.skateboard.product-title {
  margin-bottom: 1rem;
  min-width: 100%;
  text-align: center;
}
.wheel,
.socks,
.hoodie,
.totebag {
  max-height: 180px;
}
.tshirt {
  max-height: 220px;
}
.cap {
  max-height: 150px;
}
</style>
