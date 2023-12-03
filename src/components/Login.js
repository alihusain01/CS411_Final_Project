import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import axios from 'axios';

const Login = ({onLoginSuccess}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginSearch = () => {
    // Make the GET request with query parameters
    axios
      .get('http://localhost:3002/api/login', {
        params: {
          userName: username,
          password: password,
        },
      })
      .then((response) => {
        onLoginSuccess(response.data.userName);
        console.log('Success: ' + JSON.stringify(response.data)); // Update this based on your server response
      })
      .catch((error) => {
        alert('Incorrect username and password combination'); // Handle the error appropriately
      });
  };


  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Email: ${username}, Password: ${password}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header fs-4">Login</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={loginSearch}>
                  Login
                </button>
              <a href="/signup">
                <p className = "signup-link">Don't have an account? Sign up here!</p>
              </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;