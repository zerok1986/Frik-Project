const { Schema, model } = require('mongoose')

const comicSchema = new Schema(
  {
    name: String,
    description: String,
    issues: Number,
    publisher: String,
    comicImg: String,
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Comic = model('Comic', comicSchema)

module.exports = Comic
