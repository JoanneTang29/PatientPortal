import React from 'react';
import './App.css';
import { NavData } from './NavData';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  // Step 1.
  console.log(props);
  return (
    <div className="Navigation">
      <ul className="NavbarList">
        {NavData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == value.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
      {/* <Link
        className={`item ${
          props.location.pathname === '/home' ? 'active' : ''
        }`}
        to="/home"
      >
        Home
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/patients' ? 'active' : ''
        }`}
        to="/patients"
      >
        Patients
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/appointments' ? 'active' : ''
        }`}
        to="/appointments"
      >
        Appointments
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/messages' ? 'active' : ''
        }`}
        to="/messages"
      >
        Messages
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/patientform' ? 'active' : ''
        }`}
        to="/patientform"
      >
        Forms
      </Link> */}
    </div>
  );
};

export default Navigation;
