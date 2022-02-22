import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    products: []
  },
  mutations: {
    saveItems(state, items){
      state.products.push(items);
    }
  },
  actions: {
    async getItems(context, query){
      // Om products i state har en kategori som är samma som query 
      // vars längd på värde är mindre än 1 (är tom/finns ej). Om den inte finns gör vi API-anropet.
      if(context.state.products.filter(category => category[query]).length < 1){
        const response = await api.getItems(query);
        context.commit("saveItems", {[query]: response.data.products});
      } else {
        console.log("hej")
      }
    }
  },
  modules: {},
});
