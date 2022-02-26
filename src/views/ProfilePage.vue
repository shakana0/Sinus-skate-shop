<template>
  <main>
    <p>{{getUserData}}</p>
    <button @click="logout" >Log out</button>
  </main>
</template>

<script>
export default {
  computed:{
    getUserData(){
      return this.$store.state.user.name;
    }
  },
  methods:{
    logout(){
      this.$router.push({path: '/'})
      this.$store.dispatch("logout");
    }
  }
}
</script>

<style scoped lang="scss">

</style>