const express = require('express');
const router = express();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validate, ValidationError } = require('express-validation');
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
      await user.save();
      res.send({ user: user._id });
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

router.post(
  '/login',
  validate(loginValidation.loginValidationObject),
  async (req, res) => {
    // Check if email exists
    const user = await User.findOne({ email: req.body.email });
    console.log('user', user);
    if (!user) {
      console.log('res status');
      return res.status(401).send('Invalid e-mail or password');
    } else {
      // Check if password is correct
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        console.log('invalid pw');
        return res.status(401).send('Invalid email or password.');
      } else if (validPassword) {
        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
        res.header('auth-token', token).send(token);
      }
    }
  }
);

module.exports = router;
