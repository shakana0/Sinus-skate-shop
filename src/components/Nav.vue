<template>
  <nav>
    <div class="products-nav">
      <button
        class="menu-btn"
        @click="
          if (!skateMenu) {
            skateMenu = true;
            apparelMenu = false;
          } else {
            skateMenu = false;
          }
        "
      >
        Skate <span>&#x25BC;</span>
      </button>
      <div class="drop-menu skate" v-if="skateMenu">
        <router-link
          :to="{ path: '/Products', query: { Category: 'Skateboard' } }"
          class="product-link"
        >
          Skateboards
        </router-link>
        <router-link
          :to="{ path: '/Products', query: { Category: 'Wheel' } }"
          class="product-link"
        >
          Wheels
        </router-link>
      </div>
      <button
        class="menu-btn"
        @click="
          if (!apparelMenu) {
            apparelMenu = true;
            skateMenu = false;
          } else {
            apparelMenu = false;
          }
        "
      >
        Apparel <span>&#x25BC;</span>
      </button>
      <div class="drop-menu apparel" v-if="apparelMenu">
        <router-link
          :to="{ path: '/Products', query: { Category: 'Hoodie' } }"
          class="product-link"
        >
          Hoodies
        </router-link>
        <router-link
          :to="{ path: '/Products', query: { Category: 'Tshirt' } }"
          class="product-link"
        >
          T-shirts
        </router-link>
        <router-link
          :to="{ path: '/Products', query: { Category: 'Socks' } }"
          class="product-link"
        >
          Socks
        </router-link>
        <router-link
          :to="{ path: '/Products', query: { Category: 'Cap' } }"
          class="product-link"
        >
          Caps
        </router-link>
        <router-link
          :to="{ path: '/Products', query: { Category: 'Totebag' } }"
          class="product-link"
        >
          Totebag
        </router-link>
      </div>
      <!-- <router-link to="/Products">APPAREL</router-link> -->
    </div>
    <div class="icons-wrapper">
      <input type="text" />
      <button @click="toogleLogInModal">
        <span class="material-icons"> person_outline </span>
      </button>
      <button @click="toogleCartModal">
        <span class="material-icons"> shopping_cart </span>
      </button>
    </div>
    <Cart v-if="showCartModal" class="cart-modal"/>
    <LogInModal class="login-modal" v-if="showLogInModal" />
  </nav>
</template>

<script>
import LogInModal from "@/components/LoginModal.vue";
import Cart from "@/components/Cart.vue";
export default {
  components: { LogInModal, Cart },
  data() {
    return {
      showLogInModal: false,
      skateMenu: false,
      apparelMenu: false,
      showCartModal: false,
    };
  },
  methods: {
    toogleLogInModal() {
      this.showLogInModal = !this.showLogInModal;
    },
    toogleCartModal() {
      this.showCartModal = !this.showCartModal;
    },
    // ,
    // addQuerySkateBoard(){
    //      this.$router.replace({name: 'ProductsPage', query: {category: "Skateboard"} })
    // }
  },
};
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
.login-modal {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.cart-modal {
  position: absolute;
  left: 65%;
//   right: 0;
  top: 5%;
  bottom: 0;
//   margin: auto;
}
</style>
