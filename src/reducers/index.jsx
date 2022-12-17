//create our reducers

//set our state
const initalState = {
  userDate: {},
  isFetching: false,
  isErroe: false,
};

//set our main reducer
const asyncReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        isFetching: true,
        userData: {},
        isError: false
      };
    case "FETCHED_USER":
      return {
          ...state,
          isFetching: false,
          isError: false,
          userData: action.data
      } ;
    case "RECEIVE_ERROR":
      return {
          ...state,
          isfetching: false,
          isError: true
      } ;
    default:
      return state;
  }
};

export default asyncReducer;

// Object.assign({}, state, {});
