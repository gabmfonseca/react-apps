import React, { Fragment, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const Repos = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <Fragment>
      <h4>Repositories</h4>
      <ul>
        {globalContext.repos.map((repo) => {
          return (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Repos;
