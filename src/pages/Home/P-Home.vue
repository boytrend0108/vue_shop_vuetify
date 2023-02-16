<template>
  <div class="w-100">
    <v-container fluid class="mb-5" >
      <v-row class="w-100">
        <v-col v-for="n in 1" :key="n" class="w-100">
          <v-carousel height="400" hide-delimiter-background show-arrows="hover">
            <v-carousel-item v-for="(product, i) in products" :key="i">
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
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="n in 4" :key="n" class="w-100">
          <h1>Home</h1>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

<script >
export default{
   data(){
    return{
      products:[
        {
          id:'1',
          title:'Ноутбук Lenovo V15 (2nd Gen, AMD)',
          vendor:'Lenovo',
          color:'black',
          material:'metal/plactic',
          description:'Ноутбук Lenovo V17 обеспечивает эффективное решение ваших бизнес-задач и безопасность данных. ',
          price: 1000,
          promo:false,
          imageSrc:'https://via.placeholder.com/728x300.png',
        },
        {
          id:'1',
          title:'Ноутбук Lenovo V17 (Intel))',
          vendor:'Lenovo',
          color:'black',
          material:'metal/plactic',
          description:'Lenovo V15 (2nd Gen, 15, AMD) готов для решения любых бизнес-задач. ',
          price: 800,
          promo:false,
          imageSrc:'https://via.placeholder.com/728x300.png',
        },
        {
          id:'1',
          title:'Ноутбук Lenovo V14 (2nd Gen, AMD)',
          vendor:'Lenovo',
          color:'black',
          material:'metal/plactic',
          description:'Вы можете положиться на ноутбук Lenovo V14 (2nd Gen, 14, AMD): ',
          price: 900,
          promo:false,
          imageSrc:'https://via.placeholder.com/728x300.png',
        }
      ]
    }
   }
}
</script>