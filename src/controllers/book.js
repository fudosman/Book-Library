const Book = require("../models/book");

module.exports.postBook = async (req, res) => {
  try {
    const {
      title,
      datePublished,
      description,
      pageCount,
      genre,
      bookId,
      publisher
    } = req.body;
    const newBook = new Book({
      title,
      datePublished,
      description,
      pageCount,
      genre,
      bookId,
      publisher
    });
    if(!title || !datePublished || !description || !pageCount || !genre || !bookId || !publisher) {
      return res.status(400).json({
        msg: "All fields are required"
      });
    }
    if(!newBook.isValid) {
      return res.status(400).json({
        msg: newBook.errors
      });
    }
    await newBook.save();
    return res.status(201).json(newBook);

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: err.message
    });
  }
};

module.exports.getAllBook = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: err.message
    });
  }
};

module.exports.getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if(!book) {
      return res.status(404).json({
        msg: "Book not found"
      });
    }
    return res.status(200).json(book);

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: err.message
    });
  }
};

module.exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, datePublished, description, pageCount, genre, bookId, publisher } = req.body;
    const book = await Book.findById(id);
    if(!book) {
      return res.status(404).json({
        msg: "Book not found"
      });
    }
    if(title) {
      book.title = title;
    }
    if(datePublished) {
      book.datePublished = datePublished;
    }
    if(description) {
      book.description = description;
    }
    if(pageCount) {
      book.pageCount = pageCount;
    }
    if(genre) {
      book.genre = genre;
    }
    if(bookId) {
      book.bookId = bookId;
    }
    if(publisher) {
      book.publisher = publisher;
    }
    await book.save();
    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: err.message
    });
  }
};

module.exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if(!book) {
      return res.status(404).json({
        msg: "Book not found"
      });
    }
    await book.remove();
    return res.status(200).json({
      msg: "Book deleted"
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: err.message
    });
  }
};

