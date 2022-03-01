<template>
  <main class="checkoutLayout">
    <h2>CHECKOUT</h2>
    <PaymentForm class="paymentform"/>
    <CartBag class="cartbag"/>
    <Delivery class="delivery"/>
  </main>
</template>

<script>
import PaymentForm from "@/components/PaymentForm.vue";
import CartBag from "@/components/CartBag.vue";
import Delivery from "@/components/Delivery.vue";

export default {
  components: { PaymentForm, CartBag, Delivery }
};
</script>

<style scoped lang="scss">
.checkoutLayout{
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 10rem auto;
   grid-template-areas: 
   ". . . . checkout checkout checkout checkout . . . ."
   "payment payment payment payment payment payment cartbag cartbag cartbag cartbag cartbag cartbag"
   "delivery delivery delivery delivery delivery delivery cartbag cartbag cartbag cartbag cartbag cartbag"
   ;

    h2{
     grid-area: checkout;
    justify-self:center;
    align-self: center;
    }
  .cartbag{
    grid-area: cartbag;
       justify-self:center;
    }
  .paymentform {
    grid-area: payment;
       justify-self:center;
  }
  .delivery{
    grid-area: delivery;
    justify-self:center;
  }
}
</style>
