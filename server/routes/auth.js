const express = require('express');
const router = express();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validate } = require('express-validation');
const { loginValidation, registrationValidation } = require('../validation');

router.post(
  '/register',
  validate(registrationValidation.registrationValidationObject),
  async (req, res) => {
    // Check if user is already in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email alreay exists');

    // Hash passwords (generate the salt and then hash it)
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    // Create a new user
    const user = new User({
      // pass in data you want to submit
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

router.post(
  '/login',
  validate(loginValidation.loginValidationObject),
  async (req, res) => {
    const user = new User({
      // pass in data you want to submit
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

module.exports = router;
