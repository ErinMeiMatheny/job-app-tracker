import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";

function Signup() {
  const { emailRef, passwordRef, passwordConfirmRef } = useRef();

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h3 className="text-center mb-4"> Sign Up </h3>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password-confirmation"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-110 text-center mt3">
        Already have an account? Login!
      </div>
    </React.Fragment>
  );
}

export default Signup;
