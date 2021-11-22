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
    isRead: Boolean,
  },
  {
    timestamps: true,
  }
)

const Comic = model('Comic', comicSchema)

module.exports = Comic
