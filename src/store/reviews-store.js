// Private
 var state = {
    reviews: [{
      username: 'nathan',
      restaurant: 'Mai Thai',
      rating: 5
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
    }
  }
}

export { store }