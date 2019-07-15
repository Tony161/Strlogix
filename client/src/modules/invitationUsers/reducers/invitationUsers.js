import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_INVITE.FULFILLED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
