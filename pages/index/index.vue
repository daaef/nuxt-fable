<template>
  <div class="login-signin">
    <div class="text-center mb-10 mb-lg-20">
      <h2 class="font-weight-bold">
        Sign In
      </h2>
      <p class="text-muted font-weight-bold">
        Enter your username and password
      </p>
    </div>
    <form id="kt_login_signin_form" class="form text-left" @submit.prevent="handleSubmit">
      <div class="form-group py-2 m-0">
        <input
          v-model="username"
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="text"
          placeholder="Username"
          name="username"
          autocomplete="off"
        >
      </div>
      <div class="form-group py-2 border-top m-0">
        <input
          v-model="password"
          class="form-control h-auto border-0 px-0 placeholder-dark-75"
          type="Password"
          placeholder="Password"
          name="password"
        >
      </div>
      <div class="form-group d-flex flex-wrap justify-content-between align-items-center mt-5">
        <div class="checkbox-inline">
          <label class="checkbox m-0 text-muted font-weight-bold">
            <input type="checkbox" name="remember">
            <span />
            Remember me
          </label>
        </div>
        <!--<nuxt-link
          id="kt_login_forgot"
          to="/forget"
          href="javascript:;"
          class="text-muted text-hover-primary font-weight-bold"
        >
          Forget Password ?
        </nuxt-link>-->
      </div>
      <div class="text-center mt-15">
        <button
          id="kt_login_signin_submit"
          class="btn btn-primary btn-pill shadow-sm py-4 px-9 font-weight-bold"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    }
  },
  methods: {
    handleSubmit () {
      const user = this.users.filter((user) => {
        return user.username === this.username
      })[0]
      if (user !== {}) {
        if (this.username === user.username && this.password === user.password) {
          this.$router.push('/dashboard')
        }
      }
    }
  }
}
</script>

<style>
</style>
