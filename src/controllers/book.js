const cloudinary = require('../middlewares/cloudinary');
const fs = require('fs');
const Book = require("../models/book");

module.exports = async (req, res) => {
  try {
    const uploader = async (path) => await cloudinary.uploads(path, 'images');
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const {
        path
      } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const {
      title,
      headline,
      githubUrl,
      liveLink,
    } = req.body;
    const book = new Book({
     
      image: urls,
    });
    // console.log(work);
    const newBook = await book.save();

    res.status(200).json({
      message: "images uploaded successfully",
      data: newBook
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: err.message
    });
  }
};