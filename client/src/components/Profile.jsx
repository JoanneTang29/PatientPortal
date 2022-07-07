import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  let history = useHistory();
  let { id } = useParams(); // grabs the url ID

  useEffect(() => {
    const getPatientProfile = async (id) => {
      const res = await axios.get(`/api/patients/${id}`);
      setProfile(res.data.data.patient);
    };
    getPatientProfile(id);
  }, []);

  // Routes to edit page
  const routeEditPage = (id) => {
    let path = `/editpatient/${id}`;
    history.push(path);
  };

  const patientProfile = () => {
    return (
      <div className="Profile">
        <Card style={{ width: '25rem' }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wvio_7ZGKB19pPZ5JTTvULXR9ojuI6U0pA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: '30pt' }}>
              {profile.firstName} {profile.lastName}
            </Card.Title>
            <Card.Text>
              <div>DOB: {profile.dateOfBirth}</div>
              <div>Ht: {profile.height}"</div>
              <div>Wt: {profile.weight} lbs</div>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Medical Hx: {profile.medicalHx}</ListGroup.Item>
            <ListGroup.Item>Medications: {profile.medications}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="" onClick={() => routeEditPage(profile._id)}>
              Edit {profile.firstName}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="Profile">
      <div>{patientProfile()}</div>
    </div>
  );
};

export default Profile;
