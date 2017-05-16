<template>
  <div id="app">
    <div class="container">
      <h1>RE<img src="./assets/logo.png">UES</h1> <br>
      <button class="col-xl-3" @click="toggleBetween">Get Adds or Reviews</button> <br>
      <hello v-if="swapBetween"></hello>
      <review-cards v-if="swapBetween"></review-cards>
      <advert-form v-if="!swapBetween"></advert-form>
      <advert-cards v-if="!swapBetween"></advert-cards>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ReviewCards from './components/Review-cards'
import AdvertForm from './components/Advert-Form'
import AdvertCards from './components/Advert-Cards'

export default {
  name: 'app',
  data(){
    return {
      swapBetween: false
    }
  },
  components: {
    Hello,
    ReviewCards,
    AdvertForm,
    AdvertCards
  },

  methods: {
    toggleBetween(){
      this.swapBetween = !this.swapBetween
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  width: 43px;
}
h1{
  color: #35495e;
}
button{
  background-color: #42b883;
  color: #35495e;
}
</style>
