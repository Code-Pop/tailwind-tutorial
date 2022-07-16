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
  <div class="h-[60px] mb-[25px] bg-gradient-to-r from-blueish-green to-yellowish-green">
  </div>
  <div class="my-[25px] mx-[100px] float-right border-solid border-light-gray p-[30px] bg-white">
    Cart({{ cart.length }})
  </div>
  <product-display :premium="premium" @add-to-cart="updateCart"></product-display>
</template>

<style scoped>
/* 
.nav-bar {
  height: 60px;
  margin-bottom: 25px;
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
}

.cart {
  margin: 25px 100px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 30px 30px;
  background-color: white;
} */
</style>
