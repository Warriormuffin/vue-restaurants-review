<template>
 <div class="advert-cards">
    <button @click="showAddsToggle">Show Adds</button>
      <div class="row">
        <div class="cards">
          <div v-for="add in adverts" v-if="showAdverts">
          <p>Name: {{add.name}} Price: {{add.price}}</p>
          <img :src='add.pic'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store/reviews-store'
  export default {
  name: 'advert-cards',
  data () {
    return {
      adverts: store.methods.getAdverts(),
      showAdverts: false
    }
   },

    methods: {
      showAddsToggle(){
        this.showAdverts = !this.showAdverts
      }
    }
}

</script>

<style lang="">

</style>