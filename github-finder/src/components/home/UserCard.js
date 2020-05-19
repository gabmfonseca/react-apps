import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserCard = (props) => {
  const { login, avatar_url } = props.user;

  return (
    <div className="user-card">
      <img src={avatar_url} alt={`${login}'s avatar`} />
      <p>{login}</p>
      <Link to={`/user/${login}`}>
        <button className="btn dark-btn card">More</button>
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  login: PropTypes.string,
  avatar_url: PropTypes.string,
};

export default UserCard;
