import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PatientForm = (props) => {
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
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div>
      <h1>New Patient</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
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
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/patients">Return to Patient List</Link>
    </div>
  );
};

export default PatientForm;
