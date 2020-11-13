import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom"

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password does not match")
    }
    
    try {
      setError("")
      setLoading(true)
      signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
      
    } catch (error) {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <React.Fragment>
      <Card>
       
        <Card.Body>
          <h3 className="text-center mb-4"> Sign Up </h3>
          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-110 text-center mt3">
        <Link to="/signin">Login and track your jobs today!</Link>
      </div>
    </React.Fragment>
  );
}

export default Signup;
