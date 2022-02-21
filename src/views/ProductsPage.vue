<template>
  <div class="categories-page">
    <p>{{getQuery}}</p>
    <button @click="axionItems">Get Items</button>
    <button @click="test">Skateboard</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      productCategory : ""
    }
  },
  computed:{
    getQuery(){
      return this.$route.query.Category.toLowerCase();
    }
  },
  methods:{
    axionItems(){
      this.$store.dispatch('getItems');
    },
    test(){
      this.$router.replace({name: 'ProductsPage', query: {category: "Skateboard"} })
    }
    // ,
    // callComputed(){
    //   let data = this.getQuery;
    //   return data;
    // }
  },
  created(){
    let data = this.getQuery;
    this.$store.dispatch('getItems', data);
    
  },
  updated(){
    let data = this.getQuery;
    this.$store.dispatch('getItems', data);
  }
}
</script>

<style scoped lang="scss">

</style>