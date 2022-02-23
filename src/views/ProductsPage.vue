<template>
  <div class="categories-page">
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
export default {
  components: { ProductList },
  data() {
    return {
      productCategory: "",
    };
  },
  computed: {
    getQuery() {
      return this.$route.query.Category.toLowerCase();
    },
  },
  methods: {},
  created() {
    let query = this.$route.query.Category.toLowerCase();
    this.$store.dispatch("getItems", query);
  },
  beforeRouteUpdate(to, from, next) {
    const query = to.query.Category.toLowerCase();
    this.$store.dispatch("getItems", query);
    next();
  },
};
</script>

<style scoped lang="scss"></style>
