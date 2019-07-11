import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_CREATE.FULFILLED:
      return action.payload;
    case ActionTypes.RESET_PASSWORD.FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
