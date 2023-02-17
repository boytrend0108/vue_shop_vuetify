<template>
  <v-container>
    <v-layout row>
      <v-row >
      <v-col class="d-flex justify-center">
       <register-form class="w-50"/>
      </v-col>
    </v-row>
    </v-layout>
  </v-container>
</template>

<script >
import RegisterForm from '@/components/Forms/RegisterForm';
export default{
  components:{
    RegisterForm
  },
   data(){
    return{}
  
      }
}
</script>