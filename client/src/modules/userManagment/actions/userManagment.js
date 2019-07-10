import ActionTypes from '../constants/actionTypes';

export default (data) => ({
  type: ActionTypes.USER_MANAGMENT,
  payload: data,
});
