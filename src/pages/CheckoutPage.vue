<template>
  <v-card
    class="mx-auto mt-10"
    width="600"
  >
  <h1>Orders</h1>
    <v-list lines="three" select-strategy="classic" >
      <v-list-item 
        value="notifications"
        v-for="(order, i) in orders" :key="i"
      >
        <template v-slot:prepend>
          <v-list-item-action start>
            <v-checkbox-btn 
              color="success"
              :input-value="order.done"
              @change="markDone"
            >
            </v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title>{{ order.name }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ order.phone }} 
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-btn 
            color="primary"
            :to="'/product/' + order.productId"
          >Оpen</v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script >
export default{
   data(){
    return{
      orders: [
        {
          id: 'test',
          name: 'Имя покупателя',
          phone: '22-22-22',
          productId: '1',
          done: false
        }
      ]

    }
   },

   methods:{
    markDone(order){
      order.done = true
    }
   }
}
</script>