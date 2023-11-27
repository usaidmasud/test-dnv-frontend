<template>
  <div class="w-full flex flex-col items-center font-nunito">
    <div class="px-6 py-10 bg-white rounded-xl overflow-hidden w-full max-w-sm">
      <h2 class="text-xl font-black mb-6 text-center uppercase">Login Form</h2>
      <form>
        <div class="mb-2">
          <label for="email" class="label">Email</label>
          <input type="text" class="input" placeholder="Email" />
        </div>
        <div class="mb-2">
          <label for="password" class="label">Password</label>
          <input type="password" class="input" placeholder="Password" />
        </div>
        <div class="mt-6">
          <button type="submit" class="button">Login</button>
          <div class="text-center mt-4">

            <RouterLink to="/" class="text-sm font-normal  text-gray-700 hover:font-semibold duration-300 cursor-pointer">Kembali ke halaman utama</RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {}
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
