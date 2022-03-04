<template>
  <main>
    <div class="loggout-container">
      <button @click="logout">Log out</button>
    </div>
    <h2>YOUR INFORMATION</h2>
    <section v-if="getUserData.role == 'admin'">
      <button @click="showOrders">Orders</button>
      <button @click="showProducts">Products</button>
      <h3>{{ getUserData.role }}</h3>
    </section>

    <!-- admin sida -->
    
    <section v-if="isProducts">
      <label>Enter id:
        <input type="number" placeholder="product id" v-model="productId">
      </label>
      <button @click="getProduct">Get product</button>
      <button @click="deleteProduct">Delete Product</button>
      
      <form @submit.prevent="addProduct">
        <p>Create Product</p>
        <label>Title</label>
        <input type="text" placeholder="Title" required v-model="title">
        <label>Short description</label>
        <input type="text" placeholder="Short desc" required v-model="shortDesc">
        <label>Long description</label>
        <input type="text" placeholder="Long desc" required v-model="longDesc">
        <label>Product picture file</label>
        <!-- <input type="file" required @change="addFile"> -->
        <input type="file" required ref=addFile>
        <label>Category</label>
        <select required v-model="category">
          <option value="skateboard">Skateboard</option>
          <option value="wheels">Wheels</option>
          <option value="cap">Cap</option>
          <option value="hoodie">Hoodie</option>
          <option value="socks">Socks</option>
          <option value="tshirt">T-shirt</option>
          <option value="totebag">Totebag</option>
        </select>
        <label>Price</label>
        <input type="text" placeholder="price" required v-model="price">
        <button class="update-product">Add Product</button>
      </form>  

      <form v-if="getAdminProduct" @submit.prevent="updateProduct">
        <label>Title</label>
        <input type="text" v-model="getAdminProduct.title">
        <label>Short description</label>
        <input type="text" v-model="getAdminProduct.shortDesc">
        
        <input type="text" v-model="getAdminProduct.longDesc">
        <input type="text" v-model="getAdminProduct.imgFile">
        
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
    <div class="info-wrapper" v-if="getUserData.role == 'cutomer' || isOrder">
      <section class="user-info-container">
        <div class="info name">
          <p>Name:</p>
          <p>{{ getUserData.name }}</p>
        </div>
        <div class="info email">
          <p>Email:</p>
          <p>{{ getUserData.email }}</p>
        </div>
        <div class="info city">
          <p>City:</p>
          <p>{{ getUserData.address.city }}</p>
        </div>
        <div class="info street">
          <p>Street:</p>
          <p>{{ getUserData.address.street }}</p>
        </div>
        <div class="info zip">
          <p>Zip:</p>
          <p>{{ getUserData.address.zip }}</p>
        </div>
      </section>
      <h3 class="history">Order History</h3>
      <div class="order-container">
        <article class="order" v-for="order in getOrders" :key="order.id">
          <div class="info">
            <p>Created At:</p>
            <p>{{ order.createdAt }}</p>
          </div>
          <div class="info">
            <p>Order Status:</p>
            <p>{{ order.status }}</p>
            <div>
              <select v-model="status">
                <option selected>inProcess</option>
                <option>shipped</option>
                <option>canceled</option>
              </select>
               <button @click="updateStatus(order.id)">Update status</button>
            </div>
            
          </div>
          <div class="order-number">
            <p>Ordernumber:</p>
            <p>{{ order.id }}</p>
          </div>
          <section class="items-container" v-for="item in order.items" :key="item.id">
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      status : null,
      isOrder: true,
      isProducts: false,
      productId : "",
      title : "",
      shortDesc : "",
      longDesc : "",
      category :"",
      file: "",
      price: null
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
    deleteProduct(){
      this.$store.dispatch("deleteProduct", this.productId);
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
    },
    addFile(event){
      this.file = event.target.files;
    },
    addProduct(){
      const newProductData ={
        title: this.title,
        shortDesc: this.shortDesc,
        longDesc: this.longDesc,
        imgFile: this.$refs.addFile.files[0],
        category: this.category,
        price: this.price
      }
      this.$store.dispatch('uploadFile', newProductData);   
    },
    updateStatus(id){
      console.log(id);
      const obj = {
        id: id,
        status: this.status
      }
      this.$store.dispatch('updateOrderState',obj);
      console.log(this.status);
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
  .loggout-container{
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }
  h2{
    margin: 2rem;
    font-size: 2rem;
  }
  section{
    button{
      width: 150px;;
      margin: 1.5rem;
    }
    h3{
      font-size: 1.2rem;
      font-weight: normal;
      text-transform: uppercase;
      text-align: center;
      margin: 1rem;
      margin-top: 2rem;

    }
  }
  padding: 4rem 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .info-wrapper{
    display: flex;
    flex-direction: column;
    .user-info-container{
      margin-top:3rem;
      align-self: center;
      max-width: 50%;
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(3,1fr);
      grid-template-areas:
      "email email"
      "name city"
      "street zip";
      gap: 1rem 2rem;
    }
    .info{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid black;
      p{
        margin: 0.4rem;
      }
    }
    .email{
      grid-area: email;
    }
    .name{
      grid-area: name;
    }
    .city{
      grid-area: city;
    }
    .street{
      grid-area: street;
    }
    .zip{
      grid-area: zip;
    }
  }
  .history{
    text-align: center;
    margin: 3rem;
    font-size: 1.5rem;
  }
  .order-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4rem;
    margin-bottom: 4rem;

    .order{
      border-radius: 0.5rem;
      padding: 2rem;
      border: 1px solid black;
    }
    .order-number{
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      margin-top: 2rem;
    }
  }
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
  .items-container{
    margin-bottom: 0;
  }
}
form {
  display: flex;
  flex-direction: column;
  max-width: 15rem;
    label {
      margin-top: 0.5rem;
    }
}
</style>
