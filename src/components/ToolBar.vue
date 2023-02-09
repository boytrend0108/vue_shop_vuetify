<template>
 
    <v-toolbar color="primary" class='w-100'>
      <v-app-bar-nav-icon
        @click.stop="SWITCH_DRAWER"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>Online Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar> 

 
</template>

<script>
import { mapMutations } from 'vuex';
  export default {
    data () {
      return {
        drawer: null,
      }
    },
    methods:{
      ...mapMutations([
        'SWITCH_DRAWER'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>