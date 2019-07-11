import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.PROFILE.FULFILLED:
      return { ...state, ...action.payload };
    case ActionTypes.DATA_GET.FULFILLED:
      return action.payload.data;
    case ActionTypes.PROFILE_UPDATE.FULFILLED:
      return { ...state, ...action.payload };
    case ActionTypes.IMAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
