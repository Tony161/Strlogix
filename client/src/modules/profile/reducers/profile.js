import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.PROFILE.FULFILLED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
