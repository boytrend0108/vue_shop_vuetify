<template>
  <v-container >
    <v-row >
      <v-col class="d-flex justify-center">
       <login-form class="w-50" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script >
import loginForm from './components/C-Login'
export default{
  components:{
    loginForm
  },

   data(){
    return{}
   }
}
</script>