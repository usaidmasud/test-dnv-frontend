<template>
  <div class="w-full flex flex-col items-center font-nunito">
    <div class="px-6 py-10 bg-white rounded-xl overflow-hidden w-full max-w-sm">
      <h2 class="text-xl font-black mb-6 text-center uppercase">Login Form</h2>
      <form @submit.prevent="submit">
        <div class="mb-2">
          <label for="email" class="label">Email</label>
          <input type="text" class="input" placeholder="Email" v-model="form.email" />
        </div>
        <div class="mb-2">
          <label for="password" class="label">Password</label>
          <input type="password" class="input" placeholder="Password" v-model="form.password" />
        </div>
        <div
          class="text-sm font-medium px-4 mt-4 py-2 rounded-lg bg-red-50 border border-red-300 shadow-lg text-red-700 w-full"
          v-if="this.errors"
        >
          {{ errors }}
        </div>
        <div class="mt-6">
          <button type="submit" class="button">Login</button>
          <div class="text-center mt-4">
            <RouterLink
              to="/"
              class="text-sm font-normal text-gray-700 hover:font-semibold duration-300 cursor-pointer"
              >Kembali ke halaman utama</RouterLink
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
  name: 'sign-in',
  data() {
    return {
      form: {
        email: 'admin@admin.com',
        password: 'password'
      },
      errors: ''
    }
  },
  mounted() {},
  methods: {
    async submit() {
      const router = useRouter()
      await axios
        .post('http://127.0.0.1:8000/api' + '/auth/login', {
          ...this.form
        })
        .then((res) => {
          sessionStorage.setItem('accessToken', res.data.accessToken)
          this.$router.push({ name: 'dashboard' })
          // router.push({ name: 'home' })
        })
        .catch((e) => {
          if (e.response.status === 401) {
            this.errors = e.response.data.message
          }
          console.log('error ', e.response.data)
        })
    }
  }
}
</script>

<style>
.label {
  @apply text-sm font-semibold text-gray-700;
}
.input {
  @apply block px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full focus:ring-primary-main focus:ring-2 hover:ring-1 transition duration-300 hover:ring-primary-main focus:outline-none text-sm focus:border-primary-main font-poppins text-gray-700;
}
.button {
  @apply px-4 py-2 uppercase tracking-wider bg-primary-main block w-full rounded-lg text-white hover:bg-primary-hover duration-300 font-poppins font-bold transition;
}
</style>
