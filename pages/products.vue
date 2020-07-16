<template>
  <div id="kt_content" class="content  d-flex flex-column flex-column-fluid">
    <!--begin::Subheader-->
    <div id="kt_subheader" class="subheader py-2 py-lg-12  subheader-transparent ">
      <div class=" container  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <!--begin::Info-->
        <div class="d-flex align-items-center flex-wrap mr-1">
          <!--begin::Heading-->
          <div class="d-flex flex-column">
            <!--begin::Title-->
            <h2 class="text-white font-weight-bold my-2 mr-5">
              Products
            </h2>
            <!--end::Title-->

            <!--begin::Breadcrumb-->
            <div class="d-flex align-items-center font-weight-bold my-2">
              <!--begin::Item-->
              <a href="#" class="opacity-75 hover-opacity-100">
                <i class="flaticon2-shelter text-white icon-1x" />
              </a>
              <!--end::Item-->
              <!--begin::Item-->
              <span class="label label-dot label-sm bg-white opacity-75 mx-3" />
              <a href="" class="text-white text-hover-white opacity-75 hover-opacity-100">
                Products </a>
              <!--end::Item-->
            </div>
            <!--end::Breadcrumb-->
          </div>
          <!--end::Heading-->
        </div>
        <!--end::Info-->
      </div>
    </div>
    <!--end::Subheader-->

    <!--begin::Entry-->
    <div class="d-flex flex-column-fluid">
      <!--begin::Container-->
      <div class=" container ">
        <!--begin::Row-->
        <div class="row my-row">
          <div v-for="(product, index) in products" :key="index" class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <!--begin::Card-->
            <div class="card card-custom gutter-b card-stretch">
              <!--begin::Body-->
              <div class="card-body text-center">
                <!--begin::User-->
                <div>
                  <div class="my-symbol">
                    <img :src="product.productImage" alt="image">
                  </div>
                </div>
                <!--end::User-->

                <!--begin::Name-->
                <div class="my-4">
                  <a
                    href="#"
                    class="text-dark font-weight-bold text-hover-primary font-size-h4"
                  >{{ product.title }}</a>
                </div>
                <!--end::Name-->

                <!--begin::Label-->
                <span class="btn btn-text btn-success btn-sm font-weight-bold">N{{ product.price }}</span>
                <!--end::Label-->

                <!--begin::Buttons-->
                <div class="mt-9">
                  <a
                    href="#"
                    class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                  >view
                    Product </a>
                </div>
                <!--end::Buttons-->
              </div>
              <!--end::Body-->
            </div>
            <!--end::Card-->
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::Entry-->
  </div>
</template>

<script>
import img from '~/assets/media/bg/bg-10.jpg'

export default {
  data () {
    return { img }
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: ['quick-panel-right', 'demo-panel-right', 'offcanvas-right', 'header-fixed', 'subheader-enabled', 'page-loading'],
        id: ['kt_body'],
        style: ['background-image:', `url(${img})`]
      },
      title: 'View Available Products'
    }
  }
}
</script>

<style lang="scss">
  .my-symbol{
    width: 100%;
    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
 .my-row {
   .card.card-custom > .card-body {
     padding: 0;
   }
 }
</style>
