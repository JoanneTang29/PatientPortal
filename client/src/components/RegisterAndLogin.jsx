import React, { useState } from 'react';
import axios from 'axios';

const RegisterAndLogin = ({ savejwtToken }) => {
  const [nameRegistration, setNameRegistration] = useState('');
  const [emailRegistration, setEmailRegistration] = useState('');
  const [passwordRegistration, setPasswordRegistration] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const register = () => {
    axios
      .post('http://localhost:4000/api/user/register', {
        name: nameRegistration,
        email: emailRegistration,
        password: passwordRegistration,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const login = () => {
    axios
      .post('http://localhost:4000/api/user/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log('res', res);
        console.log(res.status);
        if (res.status === 200) {
          //   setLoginStatus(res.data[0].email);
          console.log('savejwttoken');
          setLoginStatus('Login successful');
          savejwtToken(res.data);
        } else {
          //   setLoginStatus(res.data.message);
          setLoginStatus('Invalid email/password');
        }
      })
      .catch((error) => {
        setLoginStatus(error.response);
      });
  };

  return (
    <div>
      <h1>Patient Portal</h1>
      <div className="register">
        <h1>Register</h1>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setNameRegistration(e.target.value);
          }}
        />
        <label>E-mail</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailRegistration(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordRegistration(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="E-mail..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default RegisterAndLogin;
