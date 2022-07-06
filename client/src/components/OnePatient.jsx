import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const OnePatient = (props) => {
  const [onePatient, setOnePatient] = useState('');

  return (
    <div className="OnePatient">
      <h1>Patient Profile</h1>
    </div>
  );
};

export default OnePatient;
