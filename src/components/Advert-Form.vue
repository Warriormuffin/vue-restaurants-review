<template>
  <div class="advert-form">
    <input type="text" v-model="name" placeholder="name">
    <input type="text" v-model="pic" placeholder="pic">
    <input type="text" v-model="price" placeholder="price">
    <button @click="addAdvert">Add Advert</button>
  </div>
</template>


<script>
  import {store} from '../store/reviews-store'
  export default {
    name: 'advert-form',
    data(){
      return {
      reviews: store.methods.getAdverts(),
      name: '',
      pic: '',
      price: ''
      }
    },
    methods: {
      addAdvert(){
        debugger
        store.methods.addAdvert({
          name: this.name,
          pic: this.pic,
          price: this.price
        })
      }
    }
  }
</script>


<style>

</style>