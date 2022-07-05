const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import Routes
const authRoute = require('./routes/auth');
const patientRoute = require('./routes/patients');

// CONNECT TO OUR CONFIG.ENV FILE
dotenv.config({
  path: './config.env',
});

// Connect to DB
const DB = mongoose.connect(
  process.env.DATABASE.replace('<password>', process.env.PASSWORD)
);

// Middleware
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/patients', patientRoute);

const port = 3000;

app.listen(port, () => {
  console.log('express server listening ' + port);
});
