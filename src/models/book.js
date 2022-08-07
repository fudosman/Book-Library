const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  images: {
    type: Array,
    required: [true, "an images must be included"],
  },
  title: {
    type: String,
    required: [true, "a title must be included"],
  },
  datePublished: {
    type: Date,
    required: [true, "a date must be included"],
  },
  description: {
    type: String,
    required: [true, "a description must be included"],
  },
  pageCount: {
    type: Number,
    required: [true, "a page count must be included"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "an author must be included"],
  } 
}, {
  timestamps: true,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;