const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    rating: Number,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    comic: { type: Schema.Types.ObjectId, ref: 'Comic' },
  },
  {
    timestamps: true,
  }
)

const Review = model('Review', reviewSchema)

module.exports = Review
