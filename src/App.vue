<template>
  <div class="nav-bar"></div>

  <div class="cart">Cart({{ cart.length }})</div>
  <product-display :premium="premium" @add-to-cart="updateCart"></product-display>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue'

export default {
  components: {
    ProductDisplay
  },
  data() {
    return {
      cart: [],
      premium: true
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
}
</script>

<style scoped>

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

.cart {
  margin: 25px 100px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 30px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

@media only screen and (max-width: 600px) {
  #app {
    width: 100%;
  }
}
</style>
