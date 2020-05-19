import React, { useReducer } from 'react';
import axios from 'axios';
import GlobalContext from './GlobalContext';
import AppReducer from './AppReducer';

const GlobalContextProvider = (props) => {
  const initialState = {
    search: '',
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const onChange = (e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value });

  const getUsers = async (e) => {
    e.preventDefault();

    if (!state.search) {
      setAlert(true);
    } else {
      setAlert(false);
      setLoading();
      const res = await axios.get(`https://api.github.com/search/users?q=${state.search}`);
      dispatch({
        type: 'SET_USERS',
        payload: res.data.items,
      });
    }
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  const getUser = async (login) => {
    setLoading();
    const user = await axios.get(`https://api.github.com/users/${login}`);
    const repos = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=15&sort=created:desc`
    );
    dispatch({
      type: 'SET_USER',
      payload: user.data,
    });
    dispatch({
      type: 'SET_REPOS',
      payload: repos.data,
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const setAlert = (value) => dispatch({ type: 'SET_ALERT', payload: value });

  return (
    <GlobalContext.Provider
      value={{
        search: state.search,
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        onChange,
        getUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
