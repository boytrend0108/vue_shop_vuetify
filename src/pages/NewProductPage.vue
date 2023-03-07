<template>
  <v-container>
    <v-layout row>
      <v-row class="mt-10">
        <v-col class="d-flex flex-column justify-center align-center gap-2 ">
          <h1>Create New product</h1>
     
              <v-form
                class="w-75 mt-10 pl-2"
                v-model="valid"
                ref="form"
              >
                <v-text-field
                  v-model="title"
                  label="Title"
                  :rules="[ v => !!v || 'Field is required']"
                  class="mb-2"
                  bg-color="#FFFF"
                  clearable
                />
                <v-text-field
                  v-model="vendor"
                  label="Vendor Product"
                  class="mb-2"
                  bg-color="#FFFF"
                  clearable
                />
                <v-text-field
                  v-model="color"
                  label="Color Product"
                  class="mb-2"
                  bg-color="#FFFF"
                  clearable
                />
                <v-text-field
                  v-model="material"
                  label="Material Product"
                  class="mb-2"
                  bg-color="#FFFF"
                  clearable
                />

                <v-text-field
                  v-model="price"
                  label="Price Product"
                  class="mb-2"
                  :rules="[ v => !!v || 'Field is required']"
                  bg-color="#FFFF"
                  clearable
                />

                <v-textarea
                  v-model="description"
                  label="Description Product"
                  class="mb-2"
                  bg-color="#FFFF"
                  clearable
                />
                <br>

                <v-row class="w-75 mb-10" >
                  <v-col >
                    <v-btn
                      color="warning"
                      size="large"
                      type="submit"
                    > Upload
                      <v-icon end x-large icon="mdi-cloud-download-outline"></v-icon> 
                    </v-btn>
                  </v-col>
             </v-row>

               
             </v-form>

             <v-row class="h-1">
               <v-col class="h-1">
                <img :src="src" class="h-100 mt-10" >
               </v-col>
             </v-row>

             <v-row class="w-75" >
               <v-col >
                <v-switch label="Add to promo?" color="info" v-model="promo"></v-switch>
               </v-col>
             </v-row>

             <v-row class="w-75 mb-10" >
               <v-col >
                <v-btn
                  :disabled="!valid"
                  color="warning"
                  size="large"
                  type="submit"
                  @click="createProduct"
                > Create product
                </v-btn>
               </v-col>
             </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
    
</template>

<script >
export default{
   data(){
    return{
      title: '',
      vendor:'',
      material:'',
      color:'',
      price: 0,
      description: '',
      src: '',
      promo: false,
      valid: false
    }
   },

   methods:{
    createProduct(){
      if(this.$refs.form.validate()){
        const product = {
          title: this.title,
          vendor:this.vendor,
          material:this.material,
          color:this.color,
          price: this.price,
          description: this.description,
          src: this.src,
          promo: this.promo
        }
        console.log(product)
      }
    }
   }
}
</script>