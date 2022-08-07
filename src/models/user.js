const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: {
    type: Array,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},{
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;