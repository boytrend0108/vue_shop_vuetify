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
import LoginForm from '@/components/Forms/LoginForm'
export default{
  components:{
    LoginForm
  },

   data(){
    return{}
   }
}
</script>