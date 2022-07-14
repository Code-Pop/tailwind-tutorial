<script setup>
const props = defineProps({
  reviews: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <br/>
        Recommended: {{ review.recommend }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
}

.review-container li {
  margin-bottom: 30px;
}

@media only screen and (max-width: 600px) {
  .review-container {
    width: 90%;
    margin-left: 0px;
    box-sizing: border-box;
  }
}
</style>
