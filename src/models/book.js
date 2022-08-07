const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
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
  genre: {
    type: String,
    required: [true, "a genre must be included"],
  },
  bookId: {
    type: Number,
    required: [true, "a book id must be included"],
  },
  publisher: {
    type: String,
    required: [true, "a publisher must be included"],
  }
}, {
  timestamps: true,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;