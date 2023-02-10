<template>
  <div>
   

    <v-navigation-drawer v-model="drawer" temporary class="pt-5">
      <v-list-item 
        v-for="(link, i) in links" 
        :key="i" 
        :value="link" 
        :to="link.url" 
        active-color="primary" 
        class="list">

        <template v-slot:prepend>
          <v-icon :icon="link.icon"></v-icon>
        </template>
    
        <v-list-item-title v-text="link.text"></v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar color="primary" class='w-100'>
        <v-app-bar-nav-icon @click.stop="this.drawer = !this.drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>Online Store</v-toolbar-title>
        <v-list-item 
            v-for="(link, i) in links" 
            :key="i" 
            :value="link" 
            :to="link.url" 
            active-color="primary" 
            class="list">

        <template v-slot:prepend>
          <v-icon :icon="link.icon" class="mr-2"></v-icon>
        </template>
    
        <v-list-item-title v-text="link.text"></v-list-item-title>
      </v-list-item>
      </v-toolbar>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
   export default {
    name: 'main-layout',
    components:{
    ToolBar,
     },
     data(){
      return{
        drawer: null,
        links: [
        { text: 'Login', icon: 'mdi-account-box', url:'/login' },
        { text: 'Register', icon: 'mdi-account', url:'/register' },
        { text: 'Cart', icon: 'mdi-cart-outline', url:'/checkout' },
        { text: 'New Product', icon: 'mdi-plus', url:'/new' },
        { text: 'My Products', icon: 'mdi-list-box-outline', url:'/list' },
      ],
      }
     },
     
    computed:{
    
    }
  }
</script>

<style scoped>
 .list{
  cursor: pointer;
 }
</style>

