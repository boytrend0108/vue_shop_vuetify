<template>
  <div>
    <v-app-bar>
      <v-toolbar color="primary" class='w-100'>
        <v-app-bar-nav-icon @click.stop="this.drawer = !this.drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>Online Store</v-toolbar-title>
        <v-btn flat>
          <v-icon left class="mr-2">mdi-magnify</v-icon>
          Link One
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-box</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      Hellо+++
    </v-navigation-drawer>
    
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
        drawer: null
      }
     },
     
    computed:{
    
    }
  }
</script>

