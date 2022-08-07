const Book = require("../models/book");

module.exports.postBook = async (req, res) => {
  try {
    const data = req.body;

    if (!data.title) {
      return res.status(400).json({
        msg: "Title is required"
      });
    }
    if (!data.datePublished) {
      return res.status(400).json({
        msg: "Date Published is required"
      });
    }
    if (!data.description) {
      return res.status(400).json({
        msg: "Description is required"
      });
    }
    if (!data.pageCount) {
      return res.status(400).json({
        msg: "Page Count is required"
      });
    }
    if (!data.genre) {
      return res.status(400).json({
        msg: "Genre is required"
      });
    }
    if (!data.bookId) {
      return res.status(400).json({
        msg: "Book Id is required"
      }); 
    }
    if (!data.publisher) {
      return res.status(400).json({
        msg: "Publisher is required"
      });
    }
    data.postedBy = req.user._id;
    const book = new Book(data);
    await book.save();
    return res.status(201).json(book);
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
    if(!books) {
      return res.status(404).json({
        msg: "No books found"
      });
    }
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
    const {_id} = req.user;
    
    if(!book) {
      return res.status(404).json({
        msg: "Book not found"
      });
    }
    if(_id.toString() != book.postedBy) {
      return res.status(401).json({
        msg: "Not authorized to edit this book"
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
    const {_id} = req.user;
    if(!book) {
      return res.status(404).json({
        msg: "Book not found"
      });
    }
    
     if(_id.toString() != book.postedBy) {
      return res.status(401).json({
        msg: "Not authorized to delete this book"
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

