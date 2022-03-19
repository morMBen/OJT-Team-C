import React from 'react';
import { signOut } from '../../firebase/utills';

function TempPage({ pageName }: { pageName: string }) {
  return (
    <>
      <h1>{`The Amazing ${pageName} Page`}</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export default TempPage;
