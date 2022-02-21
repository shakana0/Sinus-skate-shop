<template>
  <header>
    <p>Header</p>
    <!-- <router-link to="/Profile">Profile</router-link> -->
    <div>
      <h1>
        <router-link to="/Profile">Sinus</router-link>
      </h1>
    </div>
    
    <h1>
      Sinus
    </h1>
    <nav>
       <router-link to="/Products">Products</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
header{
  display: flex;
}
  a{
    background: black;
  }
</style>