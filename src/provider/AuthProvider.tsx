import { useEffect, useState } from 'react';
import { AuthContext, LoadingUserContext } from '../context/AuthContext';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase/firebaseSetup';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setIsLoadingUser(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <LoadingUserContext.Provider value={isLoadingUser}>
        {children}
      </LoadingUserContext.Provider>
    </AuthContext.Provider>
  );
};
