const User = require('../models/user');
const {
  hashPassword,
  verifyPassword
} = require('../services/bcrypt');
const {
  signToken
} = require('../services/jwt');

exports.signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;
    console.log(req.body);
    if (!name) {
      return res.status(400).json({
        status: 'error',
        error: 'name is required'
      });
    }
    if (!email) {
      return res.status(400).json({
        status: 'error',
        error: 'email is required'
      });
    }
    if (!password) {
      return res.status(400).json({
        status: 'error',
        error: 'password is required'
      });
    }
    // hash the password
    const hashedPassword = await hashPassword(password);
    // create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    // SIGN TOKEN
    const token = signToken({
      id: user._id,
      email: user.email
    });


    // save the user
    await user.save();
    // send the response
    res.status(201).json({
      status: 'success',
      data: {
        user,
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// the login function
exports.login = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;
    // find the user by email
    const user = await User.findOne({
      email
    });
    // if the user is not found
    if (!user) {
      return res.status(404).json({
        status: 'error',
        error: 'User not found'
      });
    }
    // verify the password
    const isMatch = await verifyPassword(password, user.password);
    // if the password is not correct
    if (!isMatch) {
      return res.status(401).json({
        status: 'error',
        error: 'Incorrect password'
      });
    }
    // if the password is correct
    // create a token
    const token = signToken({
      id: user._id,
      email: user.email
    });
    // send the response
    res.status(200).json({
      status: 'success',
      data: {
        token,
        user
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};