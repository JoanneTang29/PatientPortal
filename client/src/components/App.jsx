import React from 'react';
import './App.css';

// Additional imports
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterAndLogin from './RegisterAndLogin';
import Navigation from './Navigation';
import Patients from './Patients';
import PatientForm from './PatientForm';
import EditPatient from './EditPatient';

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
          path="/patient/edit/:id"
          render={(routerProps) => {
            return <EditPatient {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
};

// Export component
export default App;
