<template>
  <div class="hello">
    <input type="text" v-model="username" placeholder="username">
    <input type="text" v-model="restaurant" placeholder="restaurant">
    <input type="number" v-model="rating" placeholder="rating">
    <button @click="addReview"></button>
  </div>
</template>

<script>
import { store } from '../store/reviews-store'
export default {
  name: 'hello',
  data () {
    return {
      reviews: store.methods.getReviews(),
      username: '',
      restaurant: '',
      rating: Number
    }
  },
  methods: {
    addReview(){
      debugger
      store.methods.addReview({
        username: this.username,
        restaurant: this.restaurant,
        rating: this.rating
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
