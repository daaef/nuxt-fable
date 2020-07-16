<template>
  <div
    id="exampleModalCenter"
    ref="myModal"
    class="modal fade"
    data-backdrop="static"
    tabindex="-1"
    role="dialog"
    aria-labelledby="staticBackdrop"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="card card-custom">
          <div class="card-header">
            <h3 class="card-title">
              Add Product
            </h3>
          </div>
          <!--begin::Form-->
          <form @submit.prevent="handleSubmit">
            <div class="card-body">
              <div class="form-group mb-8">
                <div class="alert alert-custom alert-default" role="alert">
                  <div class="alert-icon">
                    <i class="flaticon-info text-primary" />
                  </div>
                  <div class="alert-text">
                    Fill in every information properly
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="title">Product Title</label>
                <input id="title" v-model="title" type="text" class="form-control" placeholder="Title of Product">
                <span class="form-text text-muted">Name of Product Everyone would see.</span>
              </div>
              <div class="form-group">
                <label for="price">Product Price</label>
                <input id="price" v-model="price" type="number" class="form-control" placeholder="Price of Product">
                <span class="form-text text-muted">Be careful nut to raise the price too high above general cost</span>
              </div>
              <div class="form-group">
                <label for="exampleSelect1">Select Product</label>
                <select id="exampleSelect1" v-model="product" class="form-control">
                  <option disabled value="">
                    Please select one
                  </option>
                  <option value="yam">
                    Yam
                  </option>
                  <option value="beans">
                    Beans
                  </option>
                  <option value="cassava">
                    Cassava
                  </option>
                  <option value="maize">
                    Maize
                  </option>
                  <option value="millet">
                    Millet
                  </option>
                </select>
              </div>
            </div>
            <div class="card-footer">
              <button type="submit" class="btn btn-primary mr-2">
                Submit
              </button>
              <button type="reset" class="btn btn-secondary" data-dismiss="modal">
                Cancel
              </button>
            </div>
          </form>
          <!--end::Form-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProductModal',
  data () {
    return {
      title: '',
      price: '',
      product: ''
    }
  },
  computed: {
    productImages () {
      return this.$store.getters.productImages
    }
  },
  methods: {
    handleSubmit () {
      const selectedProduct = Object.keys(this.productImages).filter((image) => {
        return image === this.product
      })[0]
      const productImage = this.productImages[selectedProduct]
      const product = {
        title: this.title,
        price: this.price,
        productImage
      }
      this.$store.commit('addProduct', product)
      this.$refs.myModal.style.display = 'none'
    }
  }
}
</script>

<style scoped>
  #exampleModalCenter{
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
