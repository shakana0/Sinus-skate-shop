import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    user: {},
    errors: {
      loginError: false,
      registrationError: false,
    },
    inCart: [],
  },
  mutations: {
    saveItems(state, items) {
      state.products.push(...items);
    },
    saveAutData(state, userData) {
      state.user = userData;
    },
    checkLoginError(state, isError) {
      state.errors.loginError = isError;
    },
    saveInCart(state, product) {
      state.inCart.push({ id: product.id, amount: 1 });
    },
  },
  actions: {
    async getItems(context, query) {
      if (
        !context.state.products.find((product) => product.category == query)
      ) {
        const response = await api.getItems(query);
        context.commit("saveItems", response.data);
      } else {
        console.log("den finns redan");
      }
    },

    async handleRegistration(context, registrationObject) {
      const request = await api.regiserUser(registrationObject);
      request;
    },
    async handleLogIn(context, loginObject) {
      const response = await api.loginUser(loginObject);
      console.log(response);
      if (response >= 300) {
        context.commit("checkLoginError", true);
      } else {
        api.saveToken(response.data.token);
        const userData = await api.getUser();
        context.commit("saveAutData", userData.data);
        context.commit("checkLoginError", false);
      }
    },
    //kanske flytta till mutations//
    
    addToCart(context, product) {
      const cart = context.state.inCart.find(
        (cartItem) => cartItem.id == product.id
      );
      if (cart) {
        cart.amount++;
      } else {
        context.commit("saveInCart", product);
      }
    },
    removeFromCart(context, product) {
      const cart = context.state.inCart.find(
        (cartItem) => cartItem.id == product.id
      );
      if (cart.amount > 1) {
        cart.amount--;
      } else {
        context.state.inCart.splice(context.state.inCart.indexOf(cart), 1)
      }
    },
  },

  getters: {
    filterProducts(state) {
      return function (category) {
        console.log(category)
        return state.products.filter(
          (products) => products.category == category
        );
      };
    },
    cart(state) {
      return state.inCart.map((cartItem) => ({
        ...state.products.find((product) => product.id == cartItem.id),
        amount: cartItem.amount,
      }));
    },
    calcTotalPrice(state, getters) {
      return getters.cart.reduce((accumulator, item) => {
        return accumulator + item.amount * item.price;
      }, 0);
    },
  },
  modules: {},
});
