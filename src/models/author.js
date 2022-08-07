const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  image: {
    type: Array,
    required: [true, "an images must be included"],
  },
  authorName: {
    type: String,
    required: [true, "author's name must be included"],
  },
  authorBio: {
    type: String,
    required: [true, "author's bio must be included"],
  },
  books: {
    type: [Schema.Types.ObjectId],
    ref: "Book",
    default: [],
    required: [true, "a book must be included"],
  }
}, {
  timestamps: true,
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;