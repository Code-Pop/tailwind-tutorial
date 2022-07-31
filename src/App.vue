<script setup>
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue'

const cart = ref([])
const premium = ref(true)
  
function updateCart(id) {
  cart.value.push(id)
}
</script>

<template>
  <div class="h-16 mb-6 bg-gradient-to-r from-[#16c0b0] to-[#84cf6a]">
  </div>
  <div class="my-6 mx-24 p-7 border border-solid border-[#d8d8d8] bg-white float-right">
    Cart({{ cart.length }})
  </div>
  <product-display :premium="premium" @add-to-cart="updateCart"></product-display>
</template>

<style scoped>

/* .nav-bar {
  height: 60px;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #16c0b0, #84cf6a);
}

.cart {
  margin: 25px 100px;
  padding: 30px;
  border: 1px solid #d8d8d8;
  background-color: white;
  float: right;
} */
</style>
