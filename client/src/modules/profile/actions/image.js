import ActionTypes from '../constants/actionTypes';

export default image => ({
  type: ActionTypes.IMAGE_ADD.name,
  payload: { image },
});
