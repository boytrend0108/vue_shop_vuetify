<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary>
      Hellо
    </v-navigation-drawer>
    <v-app-bar title="Application" app>
      <v-btn color="primary" @click.stop="drawer = !drawer">
        Toggle
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
   export default {
    name: 'main-layout',
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>

