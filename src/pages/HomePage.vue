<template>
  <div class="w-100">
    <v-container fluid class="mb-5" >
      <v-row class="w-100">
        <v-col v-for="n in 1" :key="n" class="w-100">
          <slider-comp />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div 
        class="w-100 d-flex justify-center align-center flex-wrap flex-grow-1" >
         <product-item 
            v-for="product in PRODUCTS" 
            :key="product.id" 
            :title="product.title"
            :src="product.imageSrc"
            :description="product.description"
            :price="product.price"
            :id="product.id"
            class="ma-6"
         />
      </div>
    
    </v-container>
</div>
</template>

<script >
import { mapGetters } from 'vuex';
import SliderComp from '@/components/SliderComp.vue';
import ProductItem from '@/components/ProductItem.vue'
export default{
  name: 'home-page',
  components:{
    SliderComp, ProductItem
  },
  computed:{
    ...mapGetters([
      'PRODUCTS'
    ])
  }
  
}
</script>