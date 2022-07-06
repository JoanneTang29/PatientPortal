import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Button } from '@mui/material';
import { Form, FloatingLabel } from 'react-bootstrap';

const EditPatient = ({ element }) => {
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('edit page submitted');
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

    await axios.patch('/api/patient/_id', patient);
    setMessage('Patient information updated');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="PatientForm">
      <h1>Edit Patient</h1>
      <div>
        <form onSubmit={handleUpdate}>
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
              //   required="required"
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
              //   required="required"
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
              //   required="required"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Gender"
            className="mb-3"
            value={values.gender}
            onChange={handleChange('gender')}
          >
            <Form.Control
              type="text"
              placeholder="Gender"
              //   required="required"
            />
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
          <Button variant="outlined" disabled={!values} type="submit">
            Submit
          </Button>
          <div>{message}</div>
        </form>
      </div>
    </div>
  );
};

export default EditPatient;
