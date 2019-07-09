import ActionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_MANAGMENT.FULFILLED:
      return { ...state, ...action.payload };
    case ActionTypes.ALL_GET.FULFILLED:
      return action.payload;
    case ActionTypes.DATA_UPDATE.FULFILLED :
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
