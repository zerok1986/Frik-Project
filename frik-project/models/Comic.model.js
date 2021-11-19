const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
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
    review: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  }
)

const Comic = model('Comic', comicSchema)

module.exports = Comic
