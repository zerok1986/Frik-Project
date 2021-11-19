const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: String,
    name: String,
    description: String,
    profileImg: String,
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    comics: [{ type: Schema.Types.ObjectId, ref: 'Comic' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
