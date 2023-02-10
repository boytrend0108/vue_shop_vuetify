 <template>
    <v-toolbar color="primary" class='w-100'>
      <v-app-bar-nav-icon
      @click.stop="test"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>Online Store</v-toolbar-title>
      <v-btn flat>
        <v-icon left class="mr-2">mdi-magnify</v-icon>
        Link One
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar> 
</template>

<script>

  export default {
     methods:{
      test(){
        console.log(this.$parent.$data.drawer)
      }
     }
  }
</script>

<style lang="scss" scoped>

</style> 