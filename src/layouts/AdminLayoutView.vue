<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="flex min-h-screen">
    <div class="w-[190px] bg-dark-main p-6 text-gray-100">
      <div class="flex justify-center items-center flex-col gap-2">
        <img src="@/assets/logo.svg" alt="" class="w-6 h-6" />
        <h5 class="font-bold text-sm">Admin Panel</h5>
      </div>
      <div class="flex w-full flex-col gap-1 mt-10">
        <RouterLink
          exact-active-class="bg-light-main text-dark-main"
          class="px-2 py-1 hover:bg-gray-200 hover:text-gray-700 duration-300 rounded-lg w-full text-sm tracking-wider font-medium font-inter"
          to="/admin"
          >Dashboard</RouterLink
        >
        <RouterLink
          exact-active-class="bg-light-main text-dark-main"
          class="px-2 py-1 hover:bg-gray-200 hover:text-gray-700 duration-300 rounded-lg w-full text-sm tracking-wider font-medium font-inter"
          to="/admin/umkm"
          >Umkm</RouterLink
        >
        <RouterLink
          active-class="active"
          class="px-2 py-1 hover:bg-gray-200 hover:text-gray-700 duration-300 rounded-lg w-full text-sm tracking-wider font-medium font-inter"
          to="/admin/product"
          >Product</RouterLink
        >
      </div>
    </div>
    <main class="w-[calc(100%-190px)] text-gray-700 bg-slate-100">
      <nav class="w-full h-14 bg-dark-main flex justify-end items-center px-6">
        <button
          class="bg-light-main text-dark-main rounded-lg px-2 py-1 text-sm font-semibold font-inter"
          @click="logout"
        >
          Logout
        </button>
      </nav>
      <div class="p-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    logout() {
      sessionStorage.removeItem('accessToken')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.active-admin {
  @apply bg-light-main text-dark-main;
}
</style>
