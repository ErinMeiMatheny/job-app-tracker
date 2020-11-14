import React, { useRef, useState } from "react";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory} from "react-router-dom"

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError("")
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value);
      console.log("I shouldn't be redirecting")
      history.push('/Home')
      
    } catch (error) {
      setError("Problems with signin!")
    }
    setLoading(false)
  }

  return (
    <React.Fragment>
      <Container>
      <Card className="mt-5">
       
        <Card.Body>
          <h3 className="text-center mb-4"> Sign In </h3>
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
            <Button disabled={loading} className="w-50 justify" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-110 text-center mt3">
        <Link to="/signup">Register Today!</Link>
      </div>
      </Container>
    </React.Fragment>
  );
}

export default Signin;
