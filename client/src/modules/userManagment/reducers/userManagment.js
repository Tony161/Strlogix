import ActionTypes from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.USER_MANAGMENT.FULFILLED:
      return action.payload;
    case ActionTypes.ALL_GET.FULFILLED:
      return action.payload.data;
    case ActionTypes.DATA_UPDATE.FULFILLED:
      return [
        ...state.filter(item => item.id !== action.payload.id),
        {
          ...state.find(item => item.id === action.payload.id),
          role: action.payload.role,
          active: action.payload.active,
        },
      ];
    default:
      return state;
  }
};
