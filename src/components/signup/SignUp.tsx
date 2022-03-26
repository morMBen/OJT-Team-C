import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { createAccount } from '../../firebase/utills';
import './SignUp.css';

function SignUp() {
  const [passMessage, setPassMessage] = useState<string>('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const handleSignUp = async () => {
    // Test if include at least 6 characters one uppercase one lowercase one number and one simbule
    const passValidationRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (passwordRef.current?.value !== repeatPasswordRef.current?.value) {
      setPassMessage('The passwords you typed are not the same');
    } else if (!passValidationRegex.test(passwordRef.current?.value || '')) {
      setPassMessage(
        'The password must include an uppercase and lowercase letter, a sign and a number'
      );
    } else {
      createAccount(emailRef, passwordRef);
    }
  };

  return (
    <Container id='main-container' className='d-grid h-100'>
      <Form id='sign-up-form' className='text-center p-3 w-100'>
        <img
          className='mb-4 signup-logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9OHK93NoXURI7WVklXdWG84xBdpJeFexgXKTxozM8RObLrSRPGD0BS5zQeiVKZ54qqA&usqp=CAU'
          alt='Bootstrap-5'
        />
        <h1 className='mb-3 fs-3 fw-normal'>Sign up</h1>
        <Form.Group controlId='sign-up-email-address'>
          <Form.Control
            type='email'
            ref={emailRef}
            placeholder='Email address'
            autoComplete='username'
            className='position-relative'
          />
        </Form.Group>
        <p className='d-grid mt-3'>{passMessage}</p>
        <Form.Group controlId='sign-up-password'>
          <Form.Control
            type='password'
            ref={passwordRef}
            placeholder='Password'
            autoComplete='current-password'
            className='position-relative'
          />
        </Form.Group>
        <Form.Group controlId='sign-up-password'>
          <Form.Control
            type='password'
            ref={repeatPasswordRef}
            placeholder='Repeat password'
            className='position-relative'
          />
        </Form.Group>

        <div className='d-grid mt-3'>
          <Button variant='primary' size='lg' onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
        <div className='d-grid mt-3'>
          <h5>Already have an account?</h5>
        </div>
        <div className='d-grid mt-3'>
          <Link to='login'>
            <Button style={{ width: '100%' }} variant='primary' size='lg'>
              Sign in
            </Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;
