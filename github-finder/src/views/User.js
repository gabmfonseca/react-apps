import React, { Fragment, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

import BackButton from '../components/user/BackButton';
import UserInfo from '../components/user/UserInfo';
import Repos from '../components/user/Repos';

import '../styles/User.css';

const User = (props) => {
  const globalContext = useContext(GlobalContext);
  const { loading, getUser } = globalContext;

  useEffect(() => {
    const { login } = props.match.params;
    getUser(login);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <BackButton />
      {!loading && (
        <Fragment>
          <UserInfo />
          <Repos />
        </Fragment>
      )}
    </Fragment>
  );
};

export default User;
