<template>
  <main>
    <p>{{getUserData}}</p>
    <article v-for="order in getOrders" :key="order.id">
      <h2>{{order.status}}</h2>
      <p>{{order.shippingCity}}</p>
      <p>{{order.shippingStreet}}</p>
      <p>{{order.shippingZip}}</p>
      <p>{{order.id}}</p>
      <div v-for="item in order.items" :key="item.id">
        <p>id: {{item.id}}</p>
        <p>price: {{item.price}}</p>
        <p>Amount: {{item.amount}}</p>
      </div>
    </article>
    
    <button @click="logout" >Log out</button>
  </main>
</template>

<script>
export default {
  computed:{
    getUserData(){
      return this.$store.state.user.name;
    },
    getOrders(){
      //let orders = this.$store.state.orders;
      // if (orders == null) {
      //   return "";
      // }
      // //console.log(orders)
      return this.$store.state.orders;
    }
  },
  methods:{
    logout(){
      this.$router.push({path: '/'})
      this.$store.dispatch("logout");
    }
  },
   created(){
     this.$store.dispatch('getOrders');
   },
  // updated(){
  //   this.$store.dispatch('getOrders');
  // }
  
  // updated(){
  //   this.$store.dispatch('getOrders');
  // }
}
</script>

<style scoped lang="scss">

</style>