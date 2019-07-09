import ActionTypes from '../constants/actionTypes';

export default image => ({
  type: ActionTypes.IMAGE,
  payload: { image },
});
