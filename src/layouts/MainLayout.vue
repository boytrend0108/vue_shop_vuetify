<template>
  <div>
    <v-app-bar>
      <ToolBar/>
    </v-app-bar>
    <v-navigation-drawer v-model="DRAWER" temporary>
      Hellо
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import {mapGetters} from 'vuex'
   export default {
    name: 'main-layout',
    components:{
    ToolBar,
     },
    computed:{
      ...mapGetters([
        'DRAWER'
      ])
    }
  }
</script>

