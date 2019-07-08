import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.PROFILE.FULFILLED:
      return { ...state, ...action.payload };
    case ActionTypes.DATA_GET.FULFILLED:
      return action.payload.data;
    case ActionTypes.DATA_UPDATE.FULFILLED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
