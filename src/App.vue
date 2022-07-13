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
</style>
