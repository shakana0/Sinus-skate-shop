import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    user: {},
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
    saveInCart(state, product){
      // state.inCart.push(product.id)
      const cart = state.inCart.find((cartItem) => cartItem.id == product.id)
      console.log(state.inCart)
      if(cart){
        cart.amount++
      }else{
        state.inCart.push({id: product.id, amount: 1})
        console.log(state.inCart)
    },
    checkRegistrationError(state, isError) {
      console.log(isError);
      state.errors.registrationError = isError
      if(isError == false){
        state.isRegistered = true;
      }
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
      // api.saveToken(response.data.token);
      // const userData = await api.getUser();
      // context.commit('saveAutData', userData.data);
    },
    addToCart(context, product) {
      context.commit("saveInCart", product);
    },
  },
  getters: {
    filterProducts(state) {
      return function (category) {
        return state.products.filter(
          (products) => products.category == category
        );
      };
    },
    // cart(state){
    //   console.log('hejsan')
    //   return state.inCart.map( cartItem => ({
    //     id: cartItem.id,
    //     title: state.products[cartItem.id].title,
    //     imgFile: state.products[cartItem.id].imgFile,
    //     amount: cartItem.amount
    //   }))
    // }
  },
  modules: {},
});
