const express = require("express");
const router = express.Router();
const {
  protect
} = require('../middleware/auth');

const {
  postBook,
  getAllBook,
  getOneBook,
  updateBook,
  deleteBook
} = require("../controllers/book");

const {
  signup,
  login
} = require('../controllers/user');

// book routes
router.route('/book')
  .get(protect, getAllBook)
  .post(protect, postBook);

router.route('/book/:id')
  .get(protect, getOneBook)
  .put(protect, updateBook)
  .delete(protect, deleteBook);

// user routes
router.route('/register')
  .post(signup);

router.route('/login')
  .post(login);

module.exports = router;