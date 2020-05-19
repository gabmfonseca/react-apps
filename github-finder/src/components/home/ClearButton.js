import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const ClearButton = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <button className="btn light-btn" onClick={globalContext.clearUsers}>
      Clear
    </button>
  );
};

export default ClearButton;
