import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';
import './App.css';

const Patients = (props) => {
  const [patients, setPatients] = useState([]);
  const [onePatient, setOnePatient] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  let history = useHistory();

  useEffect(() => {
    // Create a helper function to make api calls
    const helperFunction = async () => {
      // Retrieve data from api
      const res = await axios.get('/api/patients');
      // Retrieve the data from the response object
      const result = res.data;
      setPatients(result.data);
    };
    helperFunction();

    // onePatient in the dependency array will refresh the page when this state changes
  }, [onePatient]);

  // Routes to add patient
  const routePatientForm = () => {
    let path = 'patientform';
    history.push(path);
  };

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

  return (
    <div className="PatientList">
      <h1>Patient List</h1>
      <div className="PatientSearchAndAdd">
        <TextField
          id="standard-helperText"
          label="Search patient"
          placeholder="Search patient"
          onChange={(e) => setSearchedValue(e.target.value)}
        />
        <Button
          onClick={() => routePatientForm()}
          style={{
            padding: '1rem',
            float: 'right',
          }}
        >
          Add patient
        </Button>
      </div>
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
        <tbody>
          {patients
            .filter(
              (row) =>
                // searchedVal length check, search first or last name
                !searchedValue.length ||
                row.firstName
                  .toString()
                  .toLowerCase()
                  .includes(searchedValue.toString().toLowerCase()) ||
                row.lastName
                  .toString()
                  .toLowerCase()
                  .includes(searchedValue.toString().toLowerCase())
            )
            .map((element) => (
              <tr key={element._id}>
                <td
                  id="viewIcon"
                  onClick={() => routePatientProfile(element._id)}
                >
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
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Patients;
