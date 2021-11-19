const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  rating: Number,
  owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

const Review = model('Review', reviewSchema)

module.exports = Review
