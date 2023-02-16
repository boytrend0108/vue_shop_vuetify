<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary class="pt-5">
      <v-list-item 
        v-for="(link, i) in links" 
        :key="i" 
        :value="link" 
        :to="link.url" 
        active-color="primary" 
      >

        <template v-slot:prepend>
          <v-icon :icon="link.icon"></v-icon>
        </template>
    
        <v-list-item-title v-text="link.text"></v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar color="primary" class='w-100'>
        <v-app-bar-nav-icon 
          @click.stop="this.drawer = !this.drawer" 
          class="hidden-md-and-up"
          >
        </v-app-bar-nav-icon>
        <v-toolbar-title @click="this.$router.push('/')" class="title">
            Online Store
         </v-toolbar-title>
        <v-list-item 
            v-for="(link, i) in links" 
            :key="i" 
            :value="link" 
            :to="link.url" 
            active-color="blue-lighten-4" 
            class="list hidden-sm-and-down">

        <template v-slot:prepend>
          <v-icon :icon="link.icon" class="mr-2"></v-icon>
        </template>
    
        <v-list-item-title v-text="link.text"></v-list-item-title>
      </v-list-item>
      </v-toolbar>
    </v-app-bar>

    <v-main class="h-screen w-100 d-flex justify-center align-top">
      <router-view />
    </v-main>
  </div>
</template>

<script>

   export default {
    name: 'main-layout',
    components:{

     },
     data(){
      return{
        drawer: null,
        links: [
        { text: 'Login', icon: 'mdi-account-box', url:'/login' },
        { text: 'Register', icon: 'mdi-account', url:'/register' },
        { text: 'Cart', icon: 'mdi-cart-outline', url:'/checkout' },
        { text: 'New Product', icon: 'mdi-plus', url:'/new_product' },
        { text: 'My Products', icon: 'mdi-list-box-outline', url:'/my_products' },
      ],
      }
     },
     
    computed:{
    
    },

    methods:{
      test(){
        this
      }
    }
  }
</script>

<style scoped>
 .list{
  cursor: pointer;
  height: 100%;
 }

.title{
  cursor: pointer;
}
</style>

