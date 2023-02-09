<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue"
export default{
  components:{
    MainLayout
  },
  
  computed:{
    layout(){
      return (this.$route.meta.layout || 'main-layout')
    }
  }
}
</script>
