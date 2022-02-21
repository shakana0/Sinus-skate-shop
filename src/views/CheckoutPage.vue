<template>
  <main>
    <router-link to="/"><button>Home</button> </router-link>
    <PaymentForm />
  </main>
</template>

<script>
import PaymentForm from "@/components/PaymentForm.vue";

export default {
  components: { PaymentForm },
};
</script>

<style scoped lang="scss"></style>
