import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'; 
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function Signup() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignUp = () => {
    // Make the POST request to the signup API
    axios.post('http://localhost:3002/api/signup', {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
    })
    .then(response => {
      alert('Sign Up Successful!'); // You can handle the success response accordingly
    })
    .catch(error => {
      alert('Error: ' + error.message); // Handle the error appropriately
    });
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header fs-4">Sign Up</div>
            <div className="card-body">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" onChange={handleFirstNameChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" onChange={handleLastNameChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="johnDoe123" onChange={handleUserNameChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                </Form.Group>

                <Button onClick={handleSignUp}>Sign Up!</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
