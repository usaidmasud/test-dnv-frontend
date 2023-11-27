<template>
  <header
    class="w-full border-b border-gray-200 shadow-lg bg-white flex justify-between items-center px-10 py-6 font-nunito"
  >
    <div class="inline-flex gap-1 items-center">
      <RouterLink to="/"
        ><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30"
      /></RouterLink>
      <h5 class="font-extrabold text-xl tracking-tight">The Netwerk</h5>
    </div>

    <nav class="inline-flex items-center gap-2">
      <RouterLink
        exact-active-class="active"
        class="font-nunito text-sm font-medium hover:bg-dark-main hover:text-light-main px-2 py-1 rounded-lg transition duration-300"
        to="/"
        >Beranda</RouterLink
      >
      <RouterLink
        class="font-nunito text-sm font-medium hover:bg-dark-main hover:text-light-main px-2 py-1 rounded-lg transition duration-300"
        to="/umkm"
        exact-active-class="active"
        >Umkm</RouterLink
      >
      <RouterLink
        class="font-nunito text-sm font-medium hover:bg-dark-main hover:text-light-main px-2 py-1 rounded-lg transition duration-300"
        to="/product"
        active-class="active"
        >Product</RouterLink
      >
      <RouterLink class="ml-4" :to="{name:'signin'}"
        ><button
          class="px-2 py-1 rounded-lg bg-primary-main text-white text-sm font-semibold hover:bg-primary-hover duration-300"
        >
          Signin
        </button></RouterLink
      >
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>