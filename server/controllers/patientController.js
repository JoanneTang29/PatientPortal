// Import data model
const Patients = require('./../models/Patients');

// Create route handlers
exports.getIndex = (req, res) => {
  res.send('index page');
};

// Create Patient Page
exports.getPatients = async (req, res) => {
  try {
    console.log('server try patient');
    // Retrieve all of the patients inside our db
    const patients = await Patients.find();
    // Send response
    console.log('patients line 16', patients);
    res.status(200).json({
      status: 'success',
      results: patients.length,
      data: patients,
    });
  } catch (error) {
    console.log('error in patient controller');
    res.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};

exports.createPatient = async (req, res) => {
  try {
    // Create a new patient
    const newPatient = await Patients.create(req.body);
    // Send a response
    res.status(201).json({
      status: 'success',
      data: {
        newPatient,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

exports.getOnePatient = async (req, res) => {
  try {
    // Let's retrieve a single patient
    const patient = await Patients.findById(req.params.id);
    // Send a res
    res.status(200).json({
      status: 'success',
      data: {
        patient,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};
exports.deletePatient = async (req, res) => {
  try {
    // Let's retrieve a single patient
    await Patients.findByIdAndDelete(req.params.id);
    // Send a res
    res.status(204).json({
      status: 'success',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};
exports.updatePatient = async (req, res) => {
  try {
    // Let's retrieve a single patient
    const updatePatient = await Patients.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // Send a res
    res.status(200).json({
      status: 'success',
      data: {
        updatedTodo,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};
