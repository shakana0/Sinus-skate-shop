<template>
  <main class="checkoutLayout">
    <!-- <router-link to="/"><button>Home</button> </router-link> -->
    <h2>CHECKOUT</h2>
    <PaymentForm @street="getStreet" @zip="getZip" @city="getCity"/>
    <CartBag/>
    <Delivery @buy-event="generateOrder"/>
  </main>
</template>

<script>
//  @formInfo="userData"
import PaymentForm from "@/components/PaymentForm.vue";
import CartBag from "@/components/CartBag.vue";
import Delivery from "@/components/Delivery.vue";

export default {
  data(){
    return{
      street : "",
      zip: "",
      city:""
    }
  },
  components: { PaymentForm, CartBag, Delivery },
  methods: {
    generateOrder(){
      let order = this.getCartData;
      if(Object.keys(this.getUserState).length > 0){
        this.$store.dispatch('generateOrder', {items: order}); 
      }
      else{
        this.$store.dispatch('generateOrder', 
        {
          items: order, 
          shippingAddress:{
            city: this.city, 
            street: this.street, 
            zip : this.zip
          }
        });
      }
    },
    getStreet(street){
      this.street = street
    },
    getZip(zip){
     this.zip =  zip;
    },  
    getCity(city){
      this.city = city;
    }
  },
  computed:{
    getUserState(){
      return this.$store.state.user;
    },
    getCartData(){
      let cartItems = this.$store.state.inCart;
      let orderIds = [];
      for(let item of cartItems){
        for(let i = 0; i < item.amount; i++){
          orderIds.push(item.id);
        }
      }
      return orderIds;
    }
  }
};
</script>

<style scoped lang="scss">

</style>
