<template>
  <main>
    <h2>YOUR INFORMATION</h2>
    <section v-if="getUserData.role == 'admin'">
      <button @click="showOrders">Orders</button>
      <button @click="showProducts">Products</button>
      <p>{{ getUserData.role }}</p>
    </section>

    <!-- admin sida -->
    
    <section v-if="isProducts">
    <label>Enter id:
      <input type="number" placeholder="product id" v-model="productId">
    </label>
    <button @click="getProduct">Get product</button>
      <form v-if="getAdminProduct" @submit.prevent="updateProduct">
        <input type="text" v-model="getAdminProduct.title">
        <input type="text" v-model="getAdminProduct.shortDesc">
        <input type="text" v-model="getAdminProduct.longDesc">
        <input type="text" v-model="getAdminProduct.imgFile">
        <!-- <input type="text" v-model="getAdminProduct.category"> -->
        <select v-model="getAdminProduct.category">
          <option value="skateboard">Skateboard</option>
          <option value="wheels">Wheels</option>
          <option value="cap">Cap</option>
          <option value="hoodie">Hoodie</option>
          <option value="socks">Socks</option>
          <option value="tshirt">T-shirt</option>
          <option value="totebag">Totebag</option>
        </select>
        <input type="text" v-model="getAdminProduct.price">
        <button class="update-product">Update product</button>
      </form>
      <p v-if="getAdminProduct">{{getAdminProduct.title}}</p>
      <p>Products view</p>
    </section>

    <!-- admin och användarsida -->
    <div class="wrapper" v-if="getUserData.role == 'cutomer' || isOrder">
      <section>
        <div class="info">
          <p>Name:</p>
          <p>{{ getUserData.name }}</p>
        </div>
        <div class="info">
          <p>Email</p>
          <p>{{ getUserData.email }}</p>
        </div>
        <div class="info">
          <p>City</p>
          <p>{{ getUserData.address.city }}</p>
        </div>
        <div class="info">
          <p>Street</p>
          <p>{{ getUserData.address.street }}</p>
        </div>
        <div class="info">
          <p>Zip</p>
          <p>{{ getUserData.address.zip }}</p>
        </div>
      </section>
      <article v-for="order in getOrders" :key="order.id">
        <div class="info">
          <p>Created At:</p>
          <p>{{ order.createdAt }}</p>
        </div>
        <div class="info">
          <p>Order Status:</p>
          <p>{{ order.status }}</p>
        </div>
        <div>
          <p>Ordernumber:</p>
          <p>{{ order.id }}</p>
        </div>
        <h3>Order History</h3>
        <section v-for="item in order.items" :key="item.id">
          <div class="line"></div>
          <div>
            <p>Article Number:</p>
            <p>{{ item.ProductId }}</p>
          </div>
          <div class="line"></div>
          <div>
            <p>Price:</p>
            <p>{{ item.price }}</p>
          </div>
          <div class="line"></div>
          <div>
            <p>Amount:</p>
            <p>{{ item.amount }}</p>
          </div>
        </section>
      </article>
    </div>
    <button @click="logout">Log out</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isOrder: true,
      isProducts: false,
      productId : ""
    };
  },
  computed: {
    getUserData() {
      return this.$store.state.user;
    },
    getOrders() {
      return this.$store.state.orders;
    },
    getAdminProduct(){
      return this.$store.state.adminProduct.post;
    }
  },
  methods: {
    logout() {
      this.$router.push({ path: "/" });
      this.$store.dispatch("logout");
    },

    showProducts() {
      this.isProducts = true;
      this.isOrder = false;
    },
    showOrders() {
      this.isProducts = false;
      this.isOrder = true;
    },
    getProduct(){
      this.$store.dispatch("getProductWithId", this.productId);
      console.log()
    },
    // admin
    updateProduct(){
      let temp = this.getAdminProduct;
      let productToUpdate = {
        title: temp.title,
        shortDesc:temp.shortDesc,
        longDesc:temp.longDesc,
        imgFile:temp.imgFile,
        category:temp.category,
        price:temp.price
      }
      this.$store.dispatch('updateProductsAPI', productToUpdate);
    }
  },
  created() {
    this.$store.dispatch("getOrders");
  },
  // updated(){
  //   this.$store.dispatch('getOrders');
  // }

  // updated(){
  //   this.$store.dispatch('getOrders');
  // }
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    background-color: #df0000;
    text-align: center;
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    margin-bottom: 2rem;
  }
  button:hover {
    background-color: #e18c8c;
  }
}
article {
  width: 400px;
  h2 {
    margin-bottom: 2rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    border: 1px solid black;
    padding: 1rem;

    p:nth-child(2) {
      font-weight: 600;
    }
  }

  section {
    margin-bottom: 2rem;
    .line {
      width: 100%;
      height: 1px;
      background-color: #cdcdcd;
      padding: 0;
      border: none;
    }
    div {
      display: flex;
      justify-content: space-between;

      p {
        padding: 1rem;
      }
    }
  }
}
</style>
