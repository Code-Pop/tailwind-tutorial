<script setup>
import { ref } from 'vue'

const emit = defineEmits(['review-submitted'])

const name = ref('')
const review = ref('')
const rating = ref(null)
const recommend = ref(null)

function onSubmit() {
  if (name.value === '' || review.value === '' || rating.value === null || recommend.value === null) {
    alert('Review is incomplete. Please fill out every field.')
    return
  }

  let productReview = {
    name: name.value,
    review: review.value,
    rating: rating.value,
    recommend: recommend.value

  }

  emit('review-submitted', productReview)

  name.value = ''
  review.value = ''
  rating.value = null
  recommend.value = null
}
</script>

<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select> 
    <input class="button" type="submit" value="Submit">  
  </form>
</template>

<style scoped>

input[type="text"] {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-sizing: border-box;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

@media only screen and (max-width: 600px) {
  .review-form {
    width: 90%;
    margin-left: 0px;
  }
}
</style>