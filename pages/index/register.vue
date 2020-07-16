<template>
  <div class="login-signup">
    <div class="text-center mb-10 mb-lg-20">
      <h3 class="">
        Sign Up
      </h3>
      <p class="text-muted font-weight-bold">
        Enter your details to create your account
      </p>
    </div>

    <form id="kt_login_signup_form" class="form text-left">
      <div class="form-group py-2 m-0">
        <input
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="text"
          placeholder="Fullname"
          name="fullname"
        >
      </div>
      <div class="form-group py-2 m-0 border-top">
        <input
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="text"
          placeholder="Email"
          name="email"
          autocomplete="off"
        >
      </div>
      <div class="form-group py-2 m-0 border-top">
        <input
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="password"
          placeholder="Password"
          name="password"
        >
      </div>
      <div class="form-group py-2 m-0 border-top">
        <input
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
        >
      </div>
      <div class="form-group mt-5">
        <div class="checkbox-inline">
          <label class="checkbox checkbox-outline font-weight-bold">
            <input type="checkbox" name="agree">
            <span />
            I Agree the <a href="#" class="ml-1">terms and conditions</a>.
          </label>
        </div>
      </div>
      <div class="form-group d-flex flex-wrap flex-center">
        <button
          id="kt_login_signup_submit"
          class="btn btn-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2"
        >
          Submit
        </button>
        <nuxt-link
          id="kt_login_signup_cancel"
          to="/"
          class="btn btn-outline-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2"
        >
          Cancel
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  methods: {
    togglePassword () {
      const x = this.$refs.passw
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    handleSubmit () {
      this.$router.push('/dashboard')
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: ['quick-panel-right', 'demo-panel-right', 'offcanvas-right', 'header-fixed', 'subheader-enabled', 'page-loading'],
        id: ['kt_body']
      },
      title: 'Create an Account'
    }
  }
}
</script>

<style>

</style>
