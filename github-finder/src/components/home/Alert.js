import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Alert = () => {
  return (
    <Fragment>
      <p className="alert">
        <FontAwesomeIcon icon={faInfoCircle} /> {''}
        Please enter a valid text
      </p>
    </Fragment>
  );
};

export default Alert;
