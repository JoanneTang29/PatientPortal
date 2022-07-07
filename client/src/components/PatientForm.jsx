import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Form, FloatingLabel } from 'react-bootstrap';

const PatientForm = (props) => {
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    height: 0,
    weight: 0,
    medicalHx: '',
    medications: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      height,
      weight,
      medicalHx,
      medications,
    } = values;
    let patient = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      height,
      weight,
      medicalHx,
      medications,
    };

    await axios.post('/api/patients', patient);
    setMessage('Patient added');
    setTimeout(() => setMessage(''), 3000);
    e.target.reset();
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="PatientForm">
      <h1>New Patient</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
            value={values.firstName}
            onChange={handleChange('firstName')}
          >
            <Form.Control
              type="text"
              placeholder="First Name"
              required="required"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="mb-3"
            value={values.lastName}
            onChange={handleChange('lastName')}
          >
            <Form.Control
              type="text"
              placeholder="Last Name"
              required="required"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="MM/DD/YYYY"
            className="mb-3"
            value={values.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
          >
            <Form.Control
              type="text"
              placeholder="Date of Birth"
              required="required"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Gender"
            className="mb-3"
            value={values.gender}
            onChange={handleChange('gender')}
          >
            <Form.Control type="text" placeholder="Gender" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Height (inches)"
            className="mb-3"
            value={values.height}
            onChange={handleChange('height')}
          >
            <Form.Control type="number" placeholder="height" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Weight (lbs)"
            className="mb-3"
            value={values.weight}
            onChange={handleChange('weight')}
          >
            <Form.Control type="number" placeholder="Weight" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="List medical history"
            className="mb-3"
            value={values.medicalHx}
            onChange={handleChange('medicalHx')}
          >
            <Form.Control type="text" placeholder="medicalHx" />
          </FloatingLabel>{' '}
          <FloatingLabel
            controlId="floatingInput"
            label="Medications"
            className="mb-3"
            value={values.medications}
            onChange={handleChange('medications')}
          >
            <Form.Control type="text" placeholder="Medications" />
          </FloatingLabel>
          {/* <label>First Name</label>
          <input
            value={values.firstName}
            onChange={handleChange('firstName')}
            type="text"
          />
          <label>Last Name</label>
          <input
            value={values.lastName}
            onChange={handleChange('lastName')}
            type="text"
          />
          <label>DOB</label>
          <input
            value={values.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
            type="text"
            placeholder="MM/DD/YYYY"
          />
          <label>Gender</label>
          <input
            value={values.gender}
            onChange={handleChange('gender')}
            type="text"
          />
          <label>Height</label>
          <input
            value={values.height}
            onChange={handleChange('height')}
            type="number"
          />
          <label>Weight</label>
          <input
            value={values.weight}
            onChange={handleChange('weight')}
            type="number"
          />
          <label>Medical History</label>
          <input
            value={values.medicalHx}
            onChange={handleChange('medicalHx')}
            type="text"
          />{' '}
          <label>Medications</label>
          <input
            value={values.medications}
            onChange={handleChange('medications')}
            type="text"
          /> */}
          <Button variant="outlined" disabled={!values} type="submit">
            Submit
          </Button>
          <div>{message}</div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
