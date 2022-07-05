const express = require('express');
const User = require('../models/User');
const router = express();
const verify = require('./verifyToken');
const patientController = require('./../controllers/patientController');

// Create patient router
const patientRouter = express.Router();

// CREATE ROUTE HANDLERS
// Benefit is you can chain your methods here
patientRouter
  .route('/')
  .get(patientController.getPatients)
  .post(patientController.createPatient);
patientRouter
  .route('/:id')
  .get(patientController.getOnePatient)
  .delete(patientController.deletePatient)
  .put(patientController.updatePatient);

// router.get('/', verify, (req, res) => {
//   res.send(req.user);
//   //   res.json({
//   //     patients: {
//   //       firstName: 'Joanne',
//   //       lastName: 'Tang',
//   //       description: 'random data',
//   //     },
//   //   });
// });

module.exports = patientRouter;
