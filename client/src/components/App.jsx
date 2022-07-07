import React from 'react';
import './App.css';

// Additional imports
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterAndLogin from './RegisterAndLogin';
import Navigation from './Navigation';
import Home from './Home';
import Patients from './Patients';
import PatientForm from './PatientForm';
import Profile from './Profile';
import EditPatient from './EditPatient';
import Appointments from './Appointments';
import Messages from './Messages';

// Create component
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        {/* <Route
          exact
          path="/"
          render={(routerProps) => {
            return (
              <RegisterAndLogin
                {...routerProps}
                registerAndLoginData="This is data from register and login component"
              />
            );
          }}
        /> */}
        <Route
          path="/home"
          render={(routerProps) => {
            return <Home {...routerProps} />;
          }}
        />

        <Route
          path="/patients"
          render={(routerProps) => {
            return <Patients {...routerProps} />;
          }}
        />
        <Route
          path="/patientform"
          render={(routerProps) => {
            return <PatientForm {...routerProps} />;
          }}
        />
        <Route
          path="/patient/:id"
          render={(routerProps) => {
            return <Profile {...routerProps} />;
          }}
        />
        <Route
          path="/editpatient/:id"
          render={(routerProps) => {
            return <EditPatient {...routerProps} />;
          }}
        />
        <Route
          path="/appointments"
          render={(routerProps) => {
            return <Appointments {...routerProps} />;
          }}
        />
        <Route
          path="/messages"
          render={(routerProps) => {
            return <Messages {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
};

// Export component
export default App;
