<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
export default {
  components: { Header, Footer, Nav},
};
// import { defineComponent } from "@vue/composition-api"
// import { defineComponent } from "@vue/composition-api"
// import { defineComponent } from "@vue/composition-api"

// export default ({
// });
</script>

<style lang="scss">
@import "./assets/styles/reset";
@import "./assets/styles/fonts";
</style>
