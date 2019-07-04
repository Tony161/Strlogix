import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGON.FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
