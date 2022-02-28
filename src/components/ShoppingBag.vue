<template>
  <main>
    <h2>Shopping Bag</h2>
    <header>
      <div class="headers">
        <p>Product</p>
        <div>
          <p>Price</p>
          <p>Amount</p>
          <p>Sum</p>
        </div>
      </div>
    </header>
    <article>
       <section class="order" v-for="order in cartList" :key="order.id"> 
        <!-- <img class="product-image" :class="product.category" :src="'http://localhost:5000/images/' + order.imgFile" alt="product"> -->
        <!-- fetcha bilden -->
         <p>{{ order.category }}</p>
        <p>{{ order.title }}</p>
        <p>{{order.price}}</p>
        <p>{{order.amount}}</p>
      </section> 
    </article>
  </main>
</template>

<script>
export default {
  computed: {
    cartList() {
      console.log(this.$store.state.products)
      // console.log(cartItem.id)
        return this.$store.state.inCart.map( cartItem => ({
        id: cartItem.id,
        title: this.$store.state.products.find((product) => product.id == cartItem.id).title, 
        imgFile: this.$store.state.products.find((product) => product.id == cartItem.id).imgFile,
        amount: cartItem.amount
      })
      );
    
    },


// return this.$store.state.inCart.map((item) =>
//         this.$store.state.products.find((product) => product.id == item.id) 

    //  cart(){
    //    console.log('cart')
    //   return this.$store.getters.cart
    // },
  },
};
</script>

<style scoped lang="scss">
main {
  width: 370px;
  height: 480px;
  border: 2px solid black;
  background-color: white;

  h2 {
    text-align: center;
    margin-top: 0.5rem;
  }

  div.headers {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem 1rem 1rem;
    border-bottom: 1px solid rgb(207, 203, 203);

    p {
      font-size: 0.8rem;
      font-weight: 600;
    }

    div {
      display: flex;
      p {
        margin: 0 1rem;
      }
    }
  }
}
</style>
