<template>
  <main class="checkoutLayout">
    <router-link to="/"><button>Home</button> </router-link>
    <h2>CHECKOUT</h2>
    <PaymentForm/>
    <CartBag/>
  </main>
</template>

<script>
import PaymentForm from "@/components/PaymentForm.vue";
import CartBag from "@/components/CartBag.vue";

export default {
  components: { PaymentForm, CartBag },
};
</script>

<style scoped lang="scss">

</style>
