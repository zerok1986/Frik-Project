const { Schema, model } = require('mongoose')

const comicSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: String,
    issues: Number,
    characters: [String],
    comicImg: String,
    review: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true,
  }
)

const Comic = model('Comic', comicSchema)

module.exports = Comic
