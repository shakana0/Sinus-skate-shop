<template>
  <main>
    <router-link to="/"><button>Home</button> </router-link>
    <PaymentForm />
    <Delivery />
  </main>
</template>

<script>
import PaymentForm from "@/components/PaymentForm.vue";
import Delivery from "@/components/Delivery.vue";

export default {
  components: { PaymentForm, Delivery },
};
</script>

<style scoped lang="scss"></style>
