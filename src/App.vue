<template>
  <div id="app">
    <div class="container">
      <h1>RE<img src="./assets/logo.png">UES</h1>
      <hello class="col-xl-6 offset-xl-3"></hello> <br>
      <review-cards class="col-xl-6 offset-xl-3"></review-cards>
      <advert-form></advert-form>
      <advert-cards></advert-cards>
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
  components: {
    Hello,
    ReviewCards,
    AdvertForm,
    AdvertCards
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
