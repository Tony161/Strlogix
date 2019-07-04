import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_GET.FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
