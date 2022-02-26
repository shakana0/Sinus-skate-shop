<template>
  <div class="product-wrapper">
    <article v-for="product in Allproducts" :key="product.id">
      <ProductCard :product="product" @sendCurrentProduct="sendProduct" />
    </article>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard },
  methods: {
    sendProduct(product) {
      this.$emit("sendCurrentProduct", product);
    },
  },
  computed: {
    Allproducts() {
      return this.$store.getters.filterProducts(
        this.$route.query.Category.toLowerCase()
      );
    },
  },
};
</script>
<style scoped lang="scss">
div.product-wrapper {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem 0;
  margin: 0 10rem;
}
@media only screen and (max-width: 1200px) {
  div.product-wrapper{
    grid-template-columns: repeat(3, 1fr);
    margin: 0 6rem;
  }
}
@media only screen and (max-width: 900px) {
  div.product-wrapper{
    grid-template-columns: repeat(2, 1fr);
    margin: 0 2rem;
  }
}
@media only screen and (max-width: 550px) {
  div.product-wrapper{
    grid-template-columns: repeat(1, 1fr);
    margin: 0 1rem;
  }
}
</style>
