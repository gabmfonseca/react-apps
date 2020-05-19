import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const Search = () => {
  const globalContext = useContext(GlobalContext);
  const { search, onChange, getUsers } = globalContext;

  return (
    <form onSubmit={getUsers}>
      <input
        type="text"
        name="search"
        placeholder="Search Users"
        value={search}
        onChange={onChange}
      />
      <button className="btn dark-btn">Search</button>
    </form>
  );
};

export default Search;
