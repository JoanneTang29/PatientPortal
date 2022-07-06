import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';

const Patients = (props) => {
  const [patients, setPatients] = useState([]);
  const [onePatient, setOnePatient] = useState([]);
  let history = useHistory();

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

    // onePatient in the dependency array will refresh the page when this state changes
  }, [onePatient]);

  // Routes to edit page
  const routeEditPage = (id) => {
    let path = `/editpatient/${id}`;
    history.push(path);
  };

  // Routes to patient profile
  const routePatientProfile = (id) => {
    let path = `/patient/${id}`;
    history.push(path);
  };

  // Delete patient
  const deletePatient = async (id) => {
    const req = await axios.delete(`/api/patients/${id}`);
    setOnePatient(
      onePatient.filter((onePatient) => {
        return postMessage.id !== id;
      })
    );
  };

  // Create patientList
  const patientList = patients.map((element) => {
    return (
      <tr key={element._id}>
        <td id="viewIcon" onClick={() => routePatientProfile(element._id)}>
          <PageviewRoundedIcon />
        </td>
        <td>{element.firstName}</td>
        <td>{element.lastName}</td>
        <td>{element.dateOfBirth}</td>
        <td id="genderColumn">{element.gender}</td>
        <td>123456789</td>
        <td onClick={() => routeEditPage(element._id)} id="editIcon">
          <EditRoundedIcon />
        </td>
        <td onClick={() => deletePatient(element._id)} id="deleteIcon">
          <DeleteRoundedIcon />
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
            <th>View</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Patient ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{patientList}</tbody>
      </Table>
      <Link to="/patientform">Add new patient</Link>
    </div>
  );
};

export default Patients;
