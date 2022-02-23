import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    saveItems(state, items) {
      state.products.push(...items);
    },
  },
  actions: {
    async getItems(context, query) {
      if (
        !context.state.products.find((product) => product.category == query)
      ) {
        const response = await api.getItems(query);
        context.commit("saveItems", response.data.products);
      } else {
        console.log("den finns redan");
      }
    },
  },
  getters: {
    filterProducts(state) {
      return function(category){
        return state.products.filter((products) => products.category == category)
      }
    },
  },
  modules: {},
});
