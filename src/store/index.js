import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminProduct: "",
    products: [],
    user: {},
    orders : null,
    isRegistered: false,
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
    checkRegistrationError(state, isError) {
      console.log(isError);
      state.errors.registrationError = isError
      if(isError == false){
        state.isRegistered = true;
      }
    },
    modifyRegistrationStatus(state, isRegistrated){
      state.isRegistered = isRegistrated;
    },
    modifyUserState(state){
      state.orders = null;
      state.user = {};
    },
    saveOrders(state,orders){
      state.orders = orders;
    },

    //sparar i state id:t önskat av admin
    saveProductById(state, product){
      state.adminProduct = product;
    }
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
    async handleRegistration(context, registrationObject){
      let request = await api.regiserUser(registrationObject);
      if(request >= 300){
        context.commit('checkRegistrationError', true);
      }
      else{
        context.commit('checkRegistrationError', false);
      }
      // return request
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
    getRegistrationStatus(context, isRegistered){
      context.commit("modifyRegistrationStatus", isRegistered);
    },
    logout(context){
      api.saveToken("");
      context.commit("modifyUserState");
    },
    async generateOrder(context, order){
      context
      await api.addOrder(order);
    },
    async getOrders(context){
      let request = await api.getOrders();
      console.log(request.data);
      context.commit('saveOrders', request.data);
    },

    //fetchar för en admin single product by id
    async getProductWithId(context, id){
      let request = await api.getProductById(id);
      context.commit('saveProductById', request.data);
    },
    //admin uppdatera api gör en fetch
    async updateProductsAPI(context, productBody){
      console.log(productBody);
      await api.updateProductById(productBody,context.state.adminProduct.post.id);
    }
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
