<template>
    <v-carousel height="400" hide-delimiter-background show-arrows="hover">
            <v-carousel-item v-for="(product, i) in PRODUCTS" :key="i">
              <v-sheet  height="100%">
                <div class="d-flex justify-center align-center overflow-hidden">
                  <div class="d-flex flex-column justify-center align-center">
                    <img :src="`${product.imageSrc}`" alt="img" class="">
                    <p class="text-primary text-h6 mt-4" >{{ product.title }}</p>
                  </div>        
                </div>
              </v-sheet>
            </v-carousel-item>
      </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'slider-comp',
    computed:{
      ...mapGetters([
        'PRODUCTS'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>