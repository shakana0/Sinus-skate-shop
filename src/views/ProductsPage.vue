<template>
  <div class="categories-page">
    <ProductList @sendCurrentProduct="saveProduct" />
    <Overlay :show="showOverlay" @closeModal="closeModal" >
      <ProductModal :product="currentProduct" v-if="showModal"  @closeModal="closeModal" class="content"/>
    </Overlay>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ProductModal from "@/components/ProductModal.vue";
import Overlay from "@/components/Overlay.vue";
export default {
  components: { ProductList, ProductModal, Overlay },
  data() {
    return {
      productCategory: "",
      currentProduct: {},
      showOverlay: false,
      showModal: false,
    };
  },
  methods: {
    saveProduct(product) {
      this.currentProduct = product;
      this.showModal = true;
      this.showOverlay = true;
    },
    closeModal(){
      this.showModal = false;
      this.showOverlay = false;
    }
  },
  computed: {
    getQuery() {
      return this.$route.query.Category.toLowerCase();
    },
  },

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

<style scoped lang="scss">
.categories-page{
  display: flex;
  justify-content: center;
}
</style>
