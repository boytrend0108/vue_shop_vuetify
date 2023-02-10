import { createStore } from 'vuex'

export default createStore({
  state:{
    drawer:null
  },
  getters:{
    DRAWER(state){
      return state.drawer
    }
  },
  mutations:{
    SWITCH_DRAWER(state){
      console.log('click')
      state.drawer = !state.drawer
    }
  },
  actions:{},
  modules:{}
})