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
      this.$store.dispatch('getItems');
    }
    //  ,
    //  callComputed(){
    //    let data = this.getQuery;
    //    return data;
    //  }
  },
  created(){
    let query = this.getQuery;
    this.$store.dispatch('getItems', query);
    
  },
  beforeRouteUpdate(to, from){
     if(from.query.Category != to.query.Category){
        this.$route.query.Category = to.query.Category;
     }
    
    console.log(to);
    console.log(from);
    //   console.log(from.query.Category);
    // let query = this.getQuery;
    // this.$store.dispatch('getItems', query);
  }
}
</script>

<style scoped lang="scss">

</style>