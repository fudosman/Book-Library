const express = require("express");
const router = express.Router();

const {
  postBook,
  getAllBook,
  getOneBook,
  updateBook,
  deleteBook
} = require("../controllers/book");

// blog routes
router.route('/book')
  .get(getAllBook)
  .post(postBook);

router.route('/book/:id')
  .get(getOneBook)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;