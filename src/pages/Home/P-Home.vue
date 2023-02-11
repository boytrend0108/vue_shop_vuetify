<template>
  <v-container>
    <v-row >
      <v-col 
        v-for="n in 4"
        :key="n" 
        class="w-100"
      >
        <h1>Home</h1>
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script >
export default{
   data(){
    return{}
   }
}
</script>