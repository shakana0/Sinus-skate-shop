<template>
  <section class="modal">
    <nav>
       <img class="close-icon" src="@/assets/icons/close.svg" alt="close icon" @click="$emit('closeModal')">
    </nav>
      <section class="articel-wrapper">
          <article class="product-info-left">
            <img class="product-image" :class="product.category" :src="'http://localhost:5000/images/' + product.imgFile" alt="product">
          </article>
          <article class="product-info-center">
              <h1>{{ product.title }}</h1>
              <div>
                <h5>DESCRIPTION</h5>
                <p>{{ product.longDesc }}</p>
              </div>
              <p class="bold">£{{ product.price}}</p>
          </article>
          
          <article class="product-info-right">
              <div class="modal-stars">
                <img src="../assets/icons/star.png" width="20px" alt="">
                <img src="../assets/icons/star.png" width="20px" alt="">
                <img src="../assets/icons/star.png" width="20px" alt="">
                <img src="../assets/icons/star.png" width="20px" alt="">
                <img src="../assets/icons/star.png" width="20px" alt="">
              </div> 

              <div>
                <!-- <div class="add-to-cart-wrapper">
                  <p class="bold">QTY</p>
                  <span class="add-to-cart">+</span>
                    <div class="counter">1</div>
                  <span class="add-to-cart">-</span>
                </div> -->
                <button class="add-btn" @click="addToCart">Add to cart</button>
              </div>    
          </article>
      </section> 
  </section>
</template>

<script>
export default {
  props: ['product'],
  methods: {
      addToCart(){
          this.$store.dispatch('addToCart', this.product)
      }
  },
};
</script>

<style scoped lang="scss">
*{
  margin: 0;
}
.articel-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90%;
    padding: 0px 1rem 1rem 1rem;
    box-sizing: border-box;
}
.modal{
    width: 650px;
    height: 400px;
    background-color: white;
    padding: 0.2rem;
    box-sizing: border-box;
}
.modal-stars{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
}
nav{
display: flex;
justify-content: flex-end;
width: 100%;
height: 10%;
}
.product-info-left{
  padding: 1rem;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 33%;
}
.product-info-center{
  padding: 1rem;
  display:flex;
  flex-direction: column;
  height: 100%; 
  box-sizing: border-box;
  width:60%;
}
.product-info-center h1{
 padding-bottom: 2rem;
}
.product-info-center p{
 padding: 0.5rem 0rem;
}
.product-info-right{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-sizing: border-box;
}
.product-info-center h1{
    font-size: 38px;
}
.bold{
    font-size: 18px;
    font-weight: bold;
}
.product-image{
    max-height: 190px;
}
.product-image.skateboard{
    max-height: 100%;   
}
.product-image.hoodie{
    max-height: 70%;   
}
.product-image.tshirt, .product-image.socks {
    max-height: 80%;   
}
.product-image.totebag {
    max-height: 90%;   
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
      justify-content: space-between;
    padding: 1.5rem 0rem;
        align-items: center;
}
.counter{
  width:1rem;
  height: 1rem;
  border: 1px solid black;
text-align: center;
}
.add-btn{
    background-color: #DF0000;
    color: white;
    padding: 0.7rem;
    border: none;
    width: 9rem;
    font-size: 1.2rem;
    font-weight: 500;
    
    cursor:pointer;
    color: #fff;
    border: none;
    border-radius: 5px;
    &:hover{
      background-color: #E18C8C;
    }
}
</style>
