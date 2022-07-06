import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Create a helper function to make api calls
    const helperFunction = async () => {
      // Retrieve data from api
      const res = await axios.get('/api/patients');
      // Lets retrieve the data from the response object
      const result = res.data;
      setPatients(result.data);
    };
    helperFunction();
    // fetch('/api/patients')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((result) => {
    //     console.log('data', result.data);
    //     setPatients(result.data);
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //   });
  }, []);

  // Create patientList
  const patientList = patients.map((element) => {
    return (
      <div key={element._id}>
        <div>
          {element.lastName}, {element.firstName} DOB:{element.dateOfBirth}{' '}
          Gender: {element.gender} {element.height}in {element.weight}lbs
          Medical Hx:{element.medicalHx}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Patient List</h1>
      <div>{patientList}</div>
      <Link to="/patientform">Patient Forms</Link>
    </div>
  );
};

export default Patients;
