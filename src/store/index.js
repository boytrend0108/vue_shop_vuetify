import { createStore } from 'vuex'

export default createStore({
  state:{
    drawer:null,
    products:[
      {
        id:'1',
        title:'Ноутбук Lenovo V15 (2nd Gen, AMD)',
        vendor:'Lenovo',
        color:'black',
        material:'metal/plactic',
        description:'Ноутбук Lenovo V17 обеспечивает эффективное решение ваших бизнес-задач и безопасность данных. ',
        price: 1000,
        promo:false,
        imageSrc:'https://via.placeholder.com/728x300.png',
      },
      {
        id:'2',
        title:'Ноутбук Lenovo V17 (Intel))',
        vendor:'Lenovo',
        color:'black',
        material:'metal/plactic',
        description:'Lenovo V15 (2nd Gen, 15, AMD) готов для решения любых бизнес-задач. ',
        price: 800,
        promo:false,
        imageSrc:'https://via.placeholder.com/728x300.png',
      },
      {
        id:'3',
        title:'Ноутбук Lenovo V14 (2nd Gen, AMD)',
        vendor:'Lenovo',
        color:'black',
        material:'metal/plactic',
        description:'Вы можете положиться на ноутбук Lenovo V14 (2nd Gen, 14, AMD): ',
        price: 900,
        promo:false,
        imageSrc:'https://via.placeholder.com/728x300.png',
      }
    ]
  },
  getters:{
    DRAWER(state){
      return state.drawer
    },
    PRODUCTS(state){
      return state.products
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