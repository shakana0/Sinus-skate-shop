import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    products :[]
  },
  mutations: {
    saveItems(state, items){
      state.products.push(items);
      console.log(state.products);
    }
  },
  actions: {
    async getItems(context,data){
      const response = await api.getItems(data);
      context.commit("saveItems", response.data);
    }
  },
  modules: {},
});
