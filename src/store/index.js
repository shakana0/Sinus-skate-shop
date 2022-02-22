import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    products :{}
  },
  mutations: {
    saveItems(state, items){
      // state.products.push(items);
      console.log(items)
      // console.log(state.products);
    }
  },
  actions: {
    async getItems(context,query){
      console.log(query);
      const response = await api.getItems(query);
      context.commit("saveItems", response.data);
    }
  },
  modules: {},
});
