<template>
  <div class="categories-page">
    <button @click="getItems">Get Items</button>
  </div>
</template>

<script>
export default {
  computed:{
    getItems(){
      
    }
  },
  methods:{
    getItems(){
      this.$store.dispatch('getItems');
    }
  }
}
</script>

<style scoped lang="scss">

</style>