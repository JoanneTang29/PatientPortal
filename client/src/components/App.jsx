import React from 'react';

// Additional imports
import { Route, Switch } from 'react-router-dom';
import RegisterAndLogin from './RegisterAndLogin';
import Navigation from './Navigation';
import Patients from './Patients';

// Create component
const App = () => {
  return (
    <div>
      <Route componenet={Navigation} />
      <Route />
      <Switch>
        <Route
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
        />
        <Route
          path="/patients"
          render={(routerProps) => {
            return <Patients {...routerProps} />;
          }}
        />
      </Switch>
    </div>
  );
};

// Export component
export default App;
