import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const Patients = (props) => {
  const [patients, setPatients] = useState([]);
  const [onePatient, setOnePatient] = useState([]);

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

    // putting onePatient in the dependency array will refresh when this state changes
  }, [onePatient]);

  // Delete patient
  const deletePatient = async (id) => {
    console.log('id');
    const req = await axios.delete(`/api/patients/${id}`);
    setOnePatient(
      onePatient.filter((onePatient) => {
        return postMessage.id !== id;
      })
    );
  };

  // Update patient
  // const updatePatient = async (id, value) => {
  //   console.log('patient updated');
  //   let data = await axios.patch(`/api/patients/${id}`, { firstName: value });
  // };

  // Create patientList
  const patientList = patients.map((element) => {
    return (
      <tr key={element._id}>
        <td>{element.firstName}</td>
        <td>{element.lastName}</td>
        <td>{element.dateOfBirth}</td>
        <td id="genderColumn">{element.gender}</td>
        <td>{element._id}</td>
        <td onClick={() => deletePatient(element._id)} id="deleteIcon">
          <DeleteRoundedIcon />
        </td>
        <td onClick={() => updatePatient(element._id)} id="editIcon">
          <EditRoundedIcon />
        </td>
      </tr>
    );
  });

  return (
    <div className="PatientList">
      <h1>Patient List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Patient ID</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{patientList}</tbody>
      </Table>
      <Link to="/patientform">Patient Forms</Link>
    </div>
  );
};

export default Patients;
