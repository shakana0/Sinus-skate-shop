<template>
  <div id="app">
    <Header class="header" />
    <Nav class="nav"/>
    <router-view class="main"/>
    <Footer class="footer" />
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
#app{
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem 3rem auto 13rem;
  grid-template-areas:
  "header"
  "nav"
  "main"
  "footer";
}
.header{
  grid-area: header;
}
.main{
  grid-area: main;
}
.nav{
  grid-area: nav;
}
.footer{
  grid-area: footer;
}
</style>
