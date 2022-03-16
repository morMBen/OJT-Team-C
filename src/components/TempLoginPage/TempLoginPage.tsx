import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';

// ↓ Logic to implement in the real login/signup pages ↓
import { createAccount, signIn, signOut } from '../../firebase/utills';

export default function TempLoginPage() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {user && <button onClick={signOut}>Sign Out</button>}

      <div style={{ maxWidth: '500px' }}>
        <form className='mt-4'>
          <label>Email</label>
          <input ref={emailRef} type='email' placeholder='email' />
          <label>Password</label>
          <input ref={passwordRef} type='password' placeholder='password' />
          <button
            onClick={async () => createAccount(emailRef, passwordRef)}
            type='button'
          >
            Sign Up
          </button>
          <button
            onClick={async () => signIn(emailRef, passwordRef)}
            type='button'
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
