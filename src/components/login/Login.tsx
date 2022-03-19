import "./Login.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

// ↓ Logic to implement in the real login/signup pages ↓
import { createAccount, signIn, signOut } from "../../firebase/utills";

function Signup() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <img
          className="mb-4 signup-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9OHK93NoXURI7WVklXdWG84xBdpJeFexgXKTxozM8RObLrSRPGD0BS5zQeiVKZ54qqA&usqp=CAU"
          alt="Bootstrap-5"
        />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Email address"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-password">
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            autoComplete="current-password"
            className="position-relative"
          />
        </Form.Group>
        <div className="d-grid mt-3">
          <Button
            variant="primary"
            size="lg"
            onClick={async () => signIn(emailRef, passwordRef)}
          >
            Sign in
          </Button>
        </div>
        <div className="d-grid mt-3">
          <Button
            variant="primary"
            size="lg"
            onClick={async () => createAccount(emailRef, passwordRef)}
          >
            Sign up
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Signup;
