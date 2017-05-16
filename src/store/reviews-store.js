// Private
 var state = {
    reviews: [{
      username: 'nathan',
      restaurant: 'Mai Thai',
      rating: 5
    }],
    advert: [{
      name: 'Taco Truck',
      pic: "http://unsplash.it/200/200",
      price: "9.99"
    }]
  }

//PUBLIC

let store = {
  methods: {
    getReviews(){
      return state.reviews
    },
    addReview(review){
      debugger
      if(!review || !review.username || !review.restaurant ||!review.rating || review.rating > 5){
        return
      }
      state.reviews.push(review)
    },
    getAdverts(){
      return state.advert
    },
    addAdvert(advertisement){
      state.advert.push(advertisement)
    }
  }
}

export { store }