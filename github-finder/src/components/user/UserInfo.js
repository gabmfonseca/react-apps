import React, { Fragment, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const UserInfo = () => {
  const globalContext = useContext(GlobalContext);

  const {
    avatar_url,
    login,
    location,
    name,
    bio,
    hireable,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = globalContext.user;

  return (
    <Fragment>
      <div className="user">
        <div className="user-col-1">
          <img src={avatar_url} alt={`${login}'s avatar`} />
          <p>{login}</p>
          <p>Location: {location}</p>
        </div>
        <div className="user-col-2">
          <p>
            <strong>Name:</strong> {name ? name : 'N/A'}
          </p>
          <p>
            <strong>Bio:</strong> {bio ? bio : 'N/A'}
          </p>
          <p>
            <strong>Hireable:</strong> {hireable ? hireable : 'N/A'}
          </p>
          <p>
            <strong>Company:</strong> {company ? company : 'N/A'}
          </p>
          <p>
            <strong>Website:</strong> {blog ? blog : 'N/A'}
          </p>
        </div>
      </div>
      <div className="user-stats">
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
        <p>Public Gists: {public_gists}</p>
      </div>
    </Fragment>
  );
};

export default UserInfo;
