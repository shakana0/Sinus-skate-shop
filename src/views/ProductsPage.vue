<template>
  <div class="categories-page">
    
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
      // this.$store.dispatch('getItems');
    }
    //  ,
    //  callComputed(){
    //    let data = this.getQuery;
    //    return data;
    //  }
  },
  created(){
    let query = this.$route.query.Category.toLowerCase();
    this.$store.dispatch('getItems', query);
    
  }
  ,
  beforeRouteUpdate(to, from, next){
    const query = to.query.Category.toLowerCase()
    this.$store.dispatch('getItems', query);
    next()
  }
}
</script>

<style scoped lang="scss">

</style>