import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default (email, password) => ({
  type: ActionTypes.LOGON.name,
  payload: axios
    .post(
      '/',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.data.response),
});
