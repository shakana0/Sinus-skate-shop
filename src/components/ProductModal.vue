<template>

  <section class="modal">
    <nav>
       <img class="close-icon" src="@/assets/icons/close.svg" alt="close icon" @click="$emit('closeModal')">
    </nav>
<section class="articel-wrapper">
 <article class="product-info">
      <img class="product-image" :class="product.category" :src="'http://localhost:5000/images/' + product.imgFile" alt="product">
      <div>
        <h3>DETAILS</h3>
        <p>{{ product.title }}</p>
        <p>{{ product.category }}</p>
        <p>{{ product.price}}</p>
      </div>  
    </article>
    
    <article>
    <h3>DESCRIPTION</h3>
        <p>{{ product.longDesc }}</p>
       <div class="add-to-cart-wrapper">
       <p>QTY</p>
          <span class="add-to-cart">+</span>
            <div class="counter">1</div>
          <span class="add-to-cart">-</span>
       </div>
      <button class="add-btn">Add to cart</button>
    </article>


</section>
   
  </section>
</template>

<script>
export default {
  props: ['product'],
  methods: {
  },
};
</script>

<style scoped lang="scss">
.articel-wrapper{
  display: flex;
}
.modal{
    width: 650px;
    height: 400px;
    background-color: white;
    padding: 0.2rem;
}
nav{
  display: flex;
width: 100%;
justify-content: flex-end;
}
.product-info{
  display:flex;
  justify-content:space-between;
  width: 45%;
}
.product-image{
    max-height: 180px;
}
.product-image.skateboard{
    max-width: 90px;
    
}
.add-to-cart{
  text-align:center;
  background-color: #38D8C4;
  color:white;
  width:1.2rem;
  height:1.2rem;
  border-radius: 50%;
}
.add-to-cart-wrapper{
  display: flex;
}
.counter{
  width:1rem;
  height: 1rem;
  border: 1pm solid black;
}
.add-btn{
  background-color: #DF0000;
  color:white;
  padding:0.7rem 2rem;
border:none;
}
</style>
