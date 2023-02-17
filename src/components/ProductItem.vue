<template>
  <v-card
   
    max-width="400"
  >
  <router-link :to="`/product/`+ id">
    <v-img
      class="align-end text-white"
      height="200"
      :src="src"
      cover
    >
    </v-img>
  </router-link>

    <v-card-title class="text-h5">{{ title }}</v-card-title>
    <v-card-subtitle class="pt-4 text-body-1">
     {{description}}
    </v-card-subtitle>

    <v-card-text>
      <p class="font-weight-bold text-h6 text-red-darken-4">Price: ${{ price }}</p>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="light-blue-darken-4"  rounded="lg" variant="outlined" :to="`/product/` + id">
        Description
      </v-btn>

      <v-btn color="white" class="bg-light-blue-darken-4" rounded="lg" >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "product-item",
    props:{
      src:{
        type: String
      },
      title:{
        type: String
      },
      price:{
        type: Number
      },
      description:{
        type: String
      },
      id:{
        id: String
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>