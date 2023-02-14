<template>
  <v-container>
    <v-layout row>
      <v-row >
      <v-col class="d-flex justify-center">
       <c-register class="w-50"/>
      </v-col>
    </v-row>
    </v-layout>
  </v-container>
</template>

<script >
import CRegister from './components/C-register.vue'
export default{
  components:{
    CRegister
  },
   data(){
    return{}
  
      }
}
</script>