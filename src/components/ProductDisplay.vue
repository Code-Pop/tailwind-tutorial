<script setup>
import { ref, computed } from 'vue'
import socksBlueImage from '../assets/socks_blue.jpg'
import socksGreenImage from '../assets/socks_green.jpg'

const props = defineProps({
  premium: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue Mastery')
const selectedVariant = ref(0)
const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
])

const reviews = ref([])
    
const title = computed(() => {
  return brand.value + ' ' + product.value
})

const image = computed(() => {
  return variants.value[selectedVariant.value].image
})

const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity
})

const shipping = computed(() => {
  if (props.premium) {
    return 'Free'
  }
  return 2.99
})

function addToCart() {
  emit('add-to-cart', variants.value[selectedVariant.value].id)
}

function updateVariant(index) {
  selectedVariant.value = index
}

function addReview(review) {
  reviews.value.push(review)
}
</script>

<template>
  <div class="p-4">
    <!-- product container: -->
    <div class="flex flex-row flex-wrap">
      <div class="w-[100%] md:w-[50%]">
        <img class = "border-2 border-solid border-[#d8d8d8] w-[70%] m-[40px] p-[15px]"
          v-bind:src="image"
        >
      </div>
      <!-- product info: -->
      <div class="w-[100%] ml-[10px] md:w-[50%] md:ml-0 ">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <!-- color circles: -->
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="w-[50px] h-[50px] mt-[8px] border-2 border-solid border-[#d8d8d8] rounded-[50%]" 
          :class="{
            green: 'bg-[green]',
            blue: 'bg-[blue]'
          }[variant.color]"
        >
        </div>

        <button 
          class="button-shade m-[30px] rounded-[5px] text-[18px] w-[160px] h-[60px] text-white p-[20px] text-center cursor-pointer" 
          :class=" inStock ? ['bg-[#39495c]'] : ['bg-[#d8d8d8]', 'cursor-not-allowed']"  
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 
.product-display {
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 100%;
}

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
}

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.button-bg.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

@media only screen and (min-width: 600px) {

  .product-image,
  .product-info {
    width: 50%;
  }

  .product-info {
    margin-left: 0;
  }
} 
*/
</style>