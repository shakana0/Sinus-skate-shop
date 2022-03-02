<template>
  <main>
    <h2>YOUR INFORMATION</h2>
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
  <h2>Order history</h2>
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

    <button @click="logout">LOG OUT</button>
  </main>
</template>

<script>
export default {
  computed: {
    getUserData() {
      return this.$store.state.user;
    },
    getOrders() {
      return this.$store.state.orders;
    },
  },
  methods: {
    logout() {
      this.$router.push({ path: "/" });
      this.$store.dispatch("logout");
    },
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
    padding: 1rem 2rem;
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
