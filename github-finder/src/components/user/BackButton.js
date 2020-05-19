import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="/">
      <button className="btn light-btn back">Back to Search</button>
    </Link>
  );
};

export default BackButton;
