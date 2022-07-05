const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  medicalDx: {
    type: String,
  },
  Prescription: {
    type: String,
  },
});

// Export and use scheme to create model
module.exports = mongoose.model('Patients', patientSchema);
