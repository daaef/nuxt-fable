<template>
  <!--begin::Main-->
  <div class="d-flex flex-column flex-root">
    <!--begin::Login-->
    <div id="kt_login" class="login login-6 login-signin-on login-signin-on d-flex flex-row-fluid">
      <div
        class="d-flex flex-column flex-lg-row flex-row-fluid text-center"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
      >
        <!--begin:Aside-->
        <div class="d-flex w-100 flex-center p-15">
          <div class="login-wrapper">
            <!--begin:Aside Content-->
            <div class="text-dark-75">
              <h2 class="mb-8 text-uppercase">
                Welcome to fable
              </h2>
              <a href="#">
                <img src="~/assets/media/logos/logo-dark.png" class="max-h-75px" alt="">
              </a>
              <h3 v-if="$nuxt.$route.path != '/register'" class="mb-8 mt-22 font-weight-bold">
                Don't Have an Account?
              </h3>
              <nuxt-link
                v-if="$nuxt.$route.path != '/register'"
                id="kt_login_signup"
                to="/register"
                type="button"
                class="btn btn-outline-primary btn-pill py-4 px-9 font-weight-bold"
              >
                Get An Account
              </nuxt-link>
            </div>
            <!--end:Aside Content-->
          </div>
        </div>
        <!--end:Aside-->

        <!--begin:Divider-->
        <div class="login-divider">
          <div />
        </div>
        <!--end:Divider-->

        <!--begin:Content-->
        <div class="d-flex w-100 flex-center p-15 position-relative overflow-hidden">
          <div class="login-wrapper">
            <nuxt-child />
          </div>
        </div>
        <!--end:Content-->
      </div>
    </div>
    <!--end::Login-->
  </div>
  <!--end::Main-->
</template>

<script>
import backgroundUrl from '@/assets/media/bg/bg-3.jpg'
export default {
  layout: 'auth',
  data () {
    return {
      backgroundUrl
    }
  }
}
</script>

<style>
  #kt_login{
    min-height: 100vh;
  }
  .login-wrapper{
    width: 100%;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
