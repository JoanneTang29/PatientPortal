import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { Button } from '@mui/material';
import { Form } from 'react-bootstrap';

const EditPatient = ({ props }) => {
  let { id } = useParams();
  let history = useHistory();
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

  useEffect(() => {
    const getPatientInfo = async (id) => {
      const res = await axios.get(`/api/patients/${id}`);
      console.log(res.data.data.patient);
      setValues(res.data.data.patient);
    };
    getPatientInfo(id);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
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
      id,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      height,
      weight,
      medicalHx,
      medications,
    };
    await axios.patch(`/api/patients/${id}`, patient);
    setMessage('Patient updated');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChange = (name) => (e) => {
    console.log('name', name, e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  // Routes to patient profile
  const routePatientProfile = (id) => {
    let path = `/patient/${id}`;
    history.push(path);
  };

  return (
    <div className="EditPatientForm">
      <h1>Edit Patient</h1>
      <div>
        <form onSubmit={handleUpdate}>
          <div className="form-field">
            <div className="form-group">
              <label>First Name</label>
              <Form.Control
                type="text"
                className="mb-3"
                defaultValue={values.firstName}
                onChange={handleChange('firstName')}
                required="required"
              />
            </div>{' '}
            <div className="form-group">
              <label>Last Name</label>
              <Form.Control
                type="text"
                className="mb-3"
                defaultValue={values.lastName}
                onChange={handleChange('lastName')}
                required="required"
              />
            </div>{' '}
          </div>
          <div className="form-field">
            {' '}
            <div className="form-group">
              <label>Date of Birth</label>
              <Form.Control
                type="text"
                className="mb-3"
                defaultValue={values.dateOfBirth}
                onChange={handleChange('dateOfBirth')}
                required="required"
              />
            </div>{' '}
            <div className="form-group">
              <label>Gender</label>
              <Form.Control
                type="text"
                className="mb-3"
                defaultValue={values.gender}
                onChange={handleChange('gender')}
              />
            </div>{' '}
          </div>
          <div className="form-field">
            {' '}
            <div className="form-group">
              <label>Height</label>
              <Form.Control
                type="number"
                className="mb-3"
                value={values.height}
                onChange={handleChange('height')}
              />
            </div>{' '}
            <div className="form-group">
              <label>Weight</label>
              <Form.Control
                type="number"
                className="mb-3"
                value={values.weight}
                onChange={handleChange('weight')}
              />
            </div>{' '}
          </div>
          <div className="form-group">
            <label>Medical History</label>
            <Form.Control
              type="text"
              className="mb-3"
              defaultValue={values.medicalHx}
              onChange={handleChange('medicalHx')}
            />
          </div>
          <div className="form-group">
            <label>Medications</label>
            <Form.Control
              type="text"
              className="mb-3"
              defaultValue={values.medications}
              onChange={handleChange('medications')}
            />
          </div>
          <Button variant="outlined" disabled={!values} type="submit">
            Submit
          </Button>{' '}
          <span> {message}</span>
        </form>
      </div>
      <br />
      <a
        href=""
        onClick={() => {
          routePatientProfile(values._id);
        }}
      >
        View Patient
      </a>
    </div>
  );
};

export default EditPatient;
