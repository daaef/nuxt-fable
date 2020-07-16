<template>
  <!--begin::Header-->
  <div id="kt_header" class="header  header-fixed ">
    <!--begin::Container-->
    <div class=" container d-flex align-items-stretch justify-content-between">
      <!--begin::Left-->
      <div class="d-flex align-items-stretch mr-3">
        <!--begin::Header Logo-->
        <div class="header-logo">
          <nuxt-link to="/dashboard">
            <img
              alt="Logo"
              src="~/assets/media/logos/logo-light.png"
              class="logo-default max-h-40px"
            >
            <img
              alt="Logo"
              src="~/assets/media/logos/logo-dark.png"
              class="logo-sticky max-h-40px"
            >
          </nuxt-link>
        </div>
        <!--end::Header Logo-->

        <!--begin::Header Menu Wrapper-->
        <div id="kt_header_menu_wrapper" class="header-menu-wrapper header-menu-wrapper-left">
          <!--begin::Header Menu-->
          <div
            id="kt_header_menu"
            class="header-menu header-menu-left header-menu-mobile  header-menu-layout-default "
          >
            <!--begin::Header Nav-->
            <ul class="menu-nav ">
              <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here">
                <nuxt-link to="/dashboard" class="menu-link text-light">
                  <span class="menu-text">Dashboard</span>
                </nuxt-link>
              </li>
              <li class="menu-item  menu-item-submenu">
                <nuxt-link to="/products" class="menu-link">
                  <span class="menu-text">Products</span>
                </nuxt-link>
              </li>
            </ul>
            <!--end::Header Nav-->
          </div>
          <!--end::Header Menu-->
        </div>
        <!--end::Header Menu Wrapper-->
      </div>
      <!--end::Left-->

      <!--begin::Topbar-->
      <div class="topbar">
        <!--begin::User-->
        <div class="dropdown">
          <!--begin::Toggle-->
          <div class="topbar-item" data-toggle="dropdown" data-offset="0px,0px">
            <div class="btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto">
              <span class="text-white opacity-70 font-weight-bold font-size-base d-none d-md-inline mr-1">Welcome,</span>
              <span class="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">Farmer</span>
              <span class="symbol symbol-35">
                <span class="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">F</span>
              </span>
            </div>
          </div>
          <!--end::Toggle-->

          <!--begin::Dropdown-->
          <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0">
            <!--begin::Header-->
            <div class="d-flex align-items-center p-8 rounded-top">
              <!--begin::Symbol-->
              <div class="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
                <img src="~/assets/media/users/300_21.jpg" alt="">
              </div>
              <!--end::Symbol-->

              <!--begin::Text-->
              <div class="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
                Fable Emmanuel
              </div>
              <!--end::Text-->
            </div>
            <div class="separator separator-solid" />
            <!--end::Header-->

            <!--begin::Nav-->
            <div class="navi navi-spacer-x-0 pt-5">
              <!--begin::Item-->
              <nuxt-link
                to="/profile"
                class="navi-item px-8"
              >
                <div class="navi-link">
                  <div class="navi-icon mr-2">
                    <i class="flaticon2-calendar-3 text-success" />
                  </div>
                  <div class="navi-text">
                    <div class="font-weight-bold">
                      My Profile
                    </div>
                    <div class="text-muted">
                      Account settings and more
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <!--end::Item-->
              <!--begin::Footer-->
              <div class="navi-separator mt-3" />
              <div class="navi-footer  px-8 py-5">
                <a
                  href="custom/user/login-v2.html"
                  target="_blank"
                  class="btn btn-light-primary font-weight-bold"
                >Sign Out</a>
              </div>
              <!--end::Footer-->
            </div>
            <!--end::Nav-->
          </div>
          <!--end::Dropdown-->
        </div>
        <!--end::User-->
      </div>
      <!--end::Topbar-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
</style>
