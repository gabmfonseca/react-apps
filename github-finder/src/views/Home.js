import React, { Fragment, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

import UserCard from '../components/home/UserCard';
import Search from '../components/home/Search';
import Alert from '../components/home/Alert';
import ClearButton from '../components/home/ClearButton';

import '../styles/Home.css';

const Home = () => {
  const globalContext = useContext(GlobalContext);
  const { alert, users, loading } = globalContext;

  return (
    <Fragment>
      {alert && <Alert />}
      <Search />
      {users.length > 0 && <ClearButton />}
      <div className="users-container">
        {!loading && users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </Fragment>
  );
};

export default Home;
