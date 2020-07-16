<template>
  <div class="login-forgot">
    <div class="text-center mb-10 mb-lg-20">
      <h3 class="">
        Forgotten Password ?
      </h3>
      <p class="text-muted font-weight-bold">
        Enter your email to reset your password
      </p>
    </div>

    <form id="kt_login_forgot_form" class="form text-left">
      <div class="form-group py-2 m-0 border-bottom">
        <input
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="text"
          placeholder="Email"
          name="email"
          autocomplete="off"
        >
      </div>
      <div class="form-group d-flex flex-wrap flex-center mt-10">
        <button
          id="kt_login_forgot_submit"
          class="btn btn-primary btn-pill font-weight-bold px-9 py-4 my-3 mx-2"
        >
          Submit
        </button>
        <nuxt-link
          id="kt_login_forgot_cancel"
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
  }
}
</script>

<style>

</style>
