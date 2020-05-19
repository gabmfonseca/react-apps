import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faGithub} />
        <h3>
          <Link to="/">GitHub Finder</Link>
        </h3>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
