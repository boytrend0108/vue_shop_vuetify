<template>
  <v-card
   
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="src"
      cover
    >
    </v-img>
    <v-card-title class="text-h5">{{ title }}</v-card-title>
    <v-card-subtitle class="pt-4 text-body-1">
     {{description}}
    </v-card-subtitle>

    <v-card-text>
      <p class="font-weight-bold text-h6 text-blue-grey-darken-3">Price: {{ price }}</p>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange">
        Share
      </v-btn>

      <v-btn color="orange">
        Explore
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