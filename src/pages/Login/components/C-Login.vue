<template>
  <div >
    <v-card class="mx-auto px-6 py-8 bg-primary" max-width="500">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
        class=""
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="emailRules"
          class="mb-2"
          bg-color="white"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="passwordRules"
          clearable
          counter="6"
          bg-color="white"
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>
        <br>
        <v-btn
          :disabled="!form"
          :loading="loading"
          color="error"
          size="large"
          type="submit"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </div>

</template>

<script>
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
      emailRules: [
        value => {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
          return 'Must be a valid e-mail.'
        },
      ],
      passwordRules: [
        value => {
          if (value?.length > 6) return true
          return 'Password needs to be at least 6 symbols.'
        },
      ],
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>