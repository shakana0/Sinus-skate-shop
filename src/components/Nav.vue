<template>
    <nav>
        <div class="products-nav">
          <!-- $FEEDBACK: Avoid inline logic, abstract to method instead -->
            <button class="menu-btn" 
            @click="
            if(!skateMenu)
            {skateMenu=true
            apparelMenu=false}
            else {skateMenu=false}
            ">
                Skate <span>&#x25BC;</span>
            </button>
            <div class="drop-menu skate" v-if="skateMenu" @click="skateMenu=false">
              <!-- 
                $FEEDBACK: When binding to-prop to router-links, use computed props,
                the less javascript in templates the better
               -->
                <router-link :to="{path:'/Products', 
                query:{Category:'Skateboard'}}" class="product-link">
                Skateboards
                </router-link>
                <router-link :to="{path:'/Products', 
                query:{Category:'Wheel'}}" 
                class="product-link">
                Wheels
                </router-link>
            </div>
            <button class="menu-btn"
            @click="
            if(!apparelMenu)
            {apparelMenu=true
            skateMenu=false}
            else {apparelMenu=false}
            ">
                Apparel <span>&#x25BC;</span>
            </button>
            <div class="drop-menu apparel" v-if="apparelMenu" @click="apparelMenu=false">
              <!-- $FEEDBACK: This is better solved with v-for -->
                <router-link :to="{path:'/Products', 
                query:{Category:'Hoodie'}}" 
                class="product-link">
                Hoodies
                </router-link>
                <router-link :to="{path:'/Products', 
                query:{Category:'Tshirt'}}" 
                class="product-link">
                T-shirts
                </router-link>
                <router-link :to="{path:'/Products', 
                query:{Category:'Socks'}}" 
                class="product-link">
                Socks
                </router-link>
                <router-link :to="{path:'/Products', 
                query:{Category:'Cap'}}" class="product-link">
                Caps
                </router-link>
                <router-link :to="{path:'/Products', 
                query:{Category:'Totebag'}}" 
                class="product-link">
                Totebag
                </router-link>
            </div>
            <!-- <router-link to="/Products">APPAREL</router-link> -->
        </div>
        <div class="icons-wrapper">
            <input type="text">
            <button @click="toogleLogInModal(); goToProfile();">
                <span class="material-icons">
                    person_outline
                </span>
                <p class="login-status" v-if="loggedIn">Your account</p>
                <p class="login-status" v-else>Log in/register</p>
            </button>    
            <button @click="toogleCartModal">
                <p v-if="getCartCount" class="cart-counter">{{getCartCount}}</p>
                <span class="material-icons"> shopping_cart </span>
            </button>
        </div>
        <Overlay  v-if="showCartModal" :show="showModal" @closeModal="closeModal">
          <ShoppingBag class="cart-modal" @closeModal="closeModal"/>
          <!-- <ShoppingBag v-if="showCartModal" class="cart-modal"/> -->
        </Overlay>
        <Overlay v-if="showLogInModal && !loggedIn" :show="showModal" @closeModal="closeModal">
          <LogInModal class="login-modal"/>
          <!-- <LogInModal v-if="showLogInModal && !loggedIn" class="login-Module"/> -->
        </Overlay>
          
    </nav>
</template>

<script>
import LogInModal from "@/components/LoginModal.vue";
import ShoppingBag from "@/components/ShoppingBag.vue";
import Overlay from "@/components/Overlay.vue";
export default {
    components: { LogInModal, ShoppingBag, Overlay },
    data(){
        return {
            showCartModal: false,
            showLogInModal : false,
            skateMenu: false,
            apparelMenu: false,
            showModal: false
        }
    },
    methods:{
        toogleLogInModal(){
            this.showLogInModal = !this.showLogInModal;
            
            this.showModal = true;
        },
        goToProfile() {
            if(this.loggedIn && this.$router.currentRoute.path != '/Profile'){
                this.$router.push({path: '/Profile'})
            }
        },
        toogleCartModal() {
            this.showCartModal = !this.showCartModal;
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
            this.showLogInModal = false
            this.showCartModal = false
        },
        getSumInCart(cart){
          console.log(cart);
          let sum = 0;
          cart.forEach(cartItem => {
            sum += cartItem.amount;
          });
          console.log(sum);
          return sum;
        }
    },
    computed: {
        loggedIn() {
            return Object.keys(this.$store.state.user).includes('email')
        },
        getCartCount(){
          let cart = this.$store.state.inCart;
          //console.log(cart);
          if(cart.length > 0){
            return this.getSumInCart(cart);
          }
          else{
            return 0;
          }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/fonts.scss";
nav {
  padding: 0.6rem 2rem 0.6rem 1rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 3rem;
  // position: relative;
}
// .product-link {
//     font-size: .8rem;
//     // align-self: center;
// }
.products-nav {
  display: flex;
  flex-wrap: nowrap;
}
// a {
//   font-size: 0.8rem;
// //   display: flex;
// //   align-items: center;
//     align-self: center
// }
.menu-btn {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 0.4rem;
  span {
    font-size: 0.7rem;
    margin-left: 0.4rem;
  }
}
.menu-btn:hover {
  color: #38d8c4;
}
.menu-btn:focus {
  color: #38d8c4;
}

.drop-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  // top: 3rem;
  transform: translate(0, 2rem);
  background-color: rgba(0, 0, 0, 0.95);
  // border: 2px solid rgba(50,50,50,0.5);
  // border-radius: 3px;
  // box-shadow:  2px 2px 2px 2px rgba(50,50,50,0.25), 1rem 1rem 1rem 1rem rgba(0,0,0,0.85);
  a {
    font-size: 1rem;
    padding: 0.5rem;
  }
  &.skate {
    transform: translate(0.5rem, 2rem);
    padding-right: 3rem;
  }
  &.apparel {
    transform: translate(6.1rem, 2rem);
    padding-right: 5rem;
  }
  a:hover {
    color: #38d8c4;
  }
}
input {
  height: 1.2rem;
  align-self: center;
}
// .login-container{
//     display:flex;
//     flex-direction:column;
// }
span {
  display: block;
}
.icons-wrapper {
  display: flex;
  justify-content: space-around;
}
button {
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  color: white;
}
.material-icons {
  color: white;
}
.material-icons:hover {
  color: #38d8c4;
}

.login-modal, .cart-modal{
  position: fixed;
  top:12rem;
  right: 1.5rem;
}
.login-status {
    color: white;
    font-size: 0.6rem;
}
.cart-counter{
  color: white;
  font-size: 0.55rem;
  font-weight: 900;
}

</style>