<template>
  <main>
    <header>
      <h2>Shopping Bag</h2>
      <section>
        <div class="headers">
          <p>Product</p>
          <div>
            <p>Price</p>
            <p>Amount</p>
            <p>Sum</p>
          </div>
        </div>
      </section>
      <article>
        <section class="order" v-for="order in cartList" :key="order.id">
          <!-- <img class="product-image" :class="product.category" :src="'http://localhost:5000/images/' + order.imgFile" alt="product"> -->
          <!-- fetcha bilden -->
          <!-- <p>{{ order.category }}</p> -->
          <div>
            <p>{{ order.category }}</p>
            <p>{{ order.title }}</p>
          </div>
          <p>{{ order.price }}</p>
          <div>
            <span @click="addProduct(order)">+</span>
            <p>{{ order.amount }}</p>
            <span @click="removeProduct(order)">-</span>
          </div>
        </section>
      </article>
    </header>
    <section class="total-price">
      <div>
        <p>Total</p>
        <p>£{{ getTotalPrice }}</p>
      </div>
      <router-link to="/Checkout">
        <button>CHECK OUT</button>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    addProduct(order) {
      return this.$store.dispatch("addToCart", order);
    },
    removeProduct(order){
      return this.$store.dispatch('removeFromCart', order)
    }
  },
  computed: {
    cartList() {
      return this.$store.getters.cart;
    },
    getTotalPrice() {
      return this.$store.getters.calcTotalPrice;
    },
  },
};
</script>

<style scoped lang="scss">
main {
  width: 370px;
  height: 480px;
  overflow: scroll;
  border: 2px solid black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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
  article {
    .order {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;

      div p:first-child {
        font-family: "Permanent Marker", cursive;
      }
      div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        width: 60px;

        span {
          text-align: center;
          background-color: #38d8c4;
          color: white;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
        }
      }
    }
  }
  .total-price {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
      padding: 2rem;

      p {
        font-weight: 600;
        font-size: 1.1rem;
      }
    }
    a {
      align-self: center;

      button {
        font-weight: 600;
        color: white;
        padding: 0.6rem 1.3rem;
        background-color: #df0000;
        border: none;
        border-radius: 5px;
      }
    }
  }
}
</style>
