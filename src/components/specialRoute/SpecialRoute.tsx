import { ReactElement, useContext } from 'react';
import { AuthContext, LoadingUserContext } from '../../context/AuthContext';

interface IProps {
  children: [ReactElement, ReactElement];
}

const SpecialRoute = ({ children }: IProps) => {
  const user = useContext(AuthContext);
  const isLoadingUser = useContext(LoadingUserContext);

  return (
    <>
      {!isLoadingUser && (user ? children[1] : children[0])}
      {isLoadingUser && <h1>Loading Spinner</h1>}
    </>
  );
};

export default SpecialRoute;
