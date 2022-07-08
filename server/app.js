const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// Import Routes
const authRoute = require('./routes/auth');
const patientRouter = require('./routes/patientRouter');
const verify = require('./routes/verifyToken');

// CONNECT TO OUR CONFIG.ENV FILE
dotenv.config({
  path: './config.env',
});

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// ? if this will help with bad request error from axios
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
// app.use(bodyParser.json);

// Allows for crossplatform between front-end and back-end
app.use(cors());
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/patients', verify, patientRouter);

// Connect to DB
const DB = mongoose.connect(
  process.env.DATABASE.replace('<password>', process.env.PASSWORD)
);

const port = 4000;

app.listen(port, () => {
  console.log('express server listening ' + port);
});
