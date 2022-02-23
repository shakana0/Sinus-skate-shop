<template>
  <div class="product-wrapper">
    <article v-for="product in Allproducts" :key="product.id">
      <ProductCard :product="product" />
    </article>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard },
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
div.product-wrapper{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
}
</style>
