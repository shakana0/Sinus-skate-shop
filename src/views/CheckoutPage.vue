<template>
  <main class="checkoutLayout">
    <router-link to="/"><button>Home</button> </router-link>
    <h2>CHECKOUT</h2>
    <PaymentForm/>
    <CartBag/>
    <Delivery />
  </main>
</template>

<script>
//  @formInfo="userData"
import PaymentForm from "@/components/PaymentForm.vue";
import CartBag from "@/components/CartBag.vue";
import Delivery from "@/components/Delivery.vue";

export default {
  components: { PaymentForm, CartBag, Delivery },
  methods: {

  }
};
</script>

<style scoped lang="scss">

</style>
