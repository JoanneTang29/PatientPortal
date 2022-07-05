const express = require('express');
const User = require('../models/User');
const router = express();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.send(req.user);
  //   res.json({
  //     patients: {
  //       firstName: 'Joanne',
  //       lastName: 'Tang',
  //       description: 'random data',
  //     },
  //   });
});

module.exports = router;
