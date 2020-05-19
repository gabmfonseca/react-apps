export default (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        search: '',
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loading: false,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};
