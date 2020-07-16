<template>
  <!--begin::Footer-->
  <div id="kt_footer" class="footer bg-white py-4 d-flex flex-lg-column ">
    <!--begin::Container-->
    <div class=" container  d-flex flex-column flex-md-row align-items-center justify-content-between">
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted font-weight-bold mr-2">2020&copy;</span>
        <a
          href="./"
          target="_blank"
          class="text-dark-75 text-hover-primary"
        >Fable</a>
      </div>
      <!--end::Copyright-->

      <!--begin::Nav-->
      <div class="nav nav-dark order-1 order-md-2">
        <nuxt-link to="/dashboard" target="_blank" class="nav-link px-3">Dashboard</nuxt-link>
        <nuxt-link to="/products" target="_blank" class="nav-link pl-3 pr-0">Products</nuxt-link>
      </div>
      <!--end::Nav-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
</style>
