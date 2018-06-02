import  vuex from 'vuex'
import Vue from 'vue'
import  mutations from './mutation'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(vuex)

const state={
  notes:[],//笔记集合
  activeNote:{
    favorite:false
  } //当前笔记的集合
}

export default  new  vuex.Store({
    state,
  getters,
  mutations,
  actions
});
