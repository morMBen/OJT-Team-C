import { auth } from './firebaseSetup';

export const createAccount = async (
  emailRef: React.RefObject<HTMLInputElement>,
  passwordRef: React.RefObject<HTMLInputElement>
) => {
  try {
    await auth.createUserWithEmailAndPassword(
      emailRef.current!.value,
      passwordRef.current!.value
    );
    console.log('afsdfas');
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async (
  emailRef: React.RefObject<HTMLInputElement>,
  passwordRef: React.RefObject<HTMLInputElement>
) => {
  try {
    await auth.signInWithEmailAndPassword(
      emailRef.current!.value,
      passwordRef.current!.value
    );
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  await auth.signOut();
};
