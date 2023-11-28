import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'; 
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header fs-4">Sign Up</div>
            <div className="card-body">
              <Form>
              <Form.Group
                  className="mb-3"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="first name" placeholder="John" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="last name" placeholder="Doe" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="johnDoe123" />
                </Form.Group>


                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>

                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button>Sign Up!</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
