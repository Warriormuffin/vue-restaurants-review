<template>
  <div class="review-cards">
    <button @click="showReviewsToggle">Show Reviews</button>
      <div class="row">
        <div class="cards">
          <div v-for="review in reviews" v-if="showReviews">
          <p>User: {{review.username}} Restaurant: {{review.restaurant}} Rating: {{review.rating}}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import { store } from '../store/reviews-store'
  export default {
  name: 'review-cards',
  data () {
    return {
      reviews: store.methods.getReviews(),
      showReviews: false
    }
   },

    methods: {
      showReviewsToggle(){
        this.showReviews = !this.showReviews
      }
    }
}


</script>



<style scoped>



</style>